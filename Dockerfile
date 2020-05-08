########################################################################
#                                                                      #
#                                                                      #
#                     build the server                                 #
#                                                                      #
#                                                                      #
########################################################################

# Start with minimalistic golang alpine image
FROM golang:1.14.2-alpine3.11 AS server-build

# set the working directory, and copy the server files over
WORKDIR /go/src/app
COPY ./server .

# install additional dependencies
# Support CGO and SSL
RUN apk --no-cache add gcc g++ make
RUN apk add git

# install go dependencies
RUN go get github.com/gorilla/mux
RUN go get github.com/gorilla/handlers
RUN go get golang.org/x/crypto/acme/autocert

# build go file to /go/src/app/bin/test/server
RUN GOOS=linux go build -ldflags="-s -w" -o ./bin/server

########################################################################
#                                                                      #
#                                                                      #
#                     build the client                                 #
#                                                                      #
#                                                                      #
########################################################################

# Start with minimalistic node alpine image
FROM node:14.0.0-alpine3.11 AS client-build

# set working directory, copy static files, and update path
WORKDIR /app
COPY ./static .
ENV PATH /app/node_modules/.bin:$PATH

# install dependencies, and build static files to /app/dist
RUN npm rebuild node-sass
RUN npm install
RUN npm run build

########################################################################
#                                                                      #
#                                                                      #
#              run the server & serve static files                     #
#                                                                      #
#                                                                      #
########################################################################

# start with minimalistic alpine image
FROM alpine:3.11

# install additional dependencies
RUN apk --no-cache add ca-certificates

# set working directory to /usr/bin/
WORKDIR /usr/bin

# copy the folder containing build file from server-build stage to /go/bin
# copy the dist folder from client-build stage to /go/bin/static
# copy shared files to server
COPY --from=server-build /go/src/app/bin /go/bin
COPY --from=client-build /app/dist /go/bin/dist
COPY --from=server-build /go/src/app/files /go/bin/shared

# expose port 8080 (the port the go server is running on)
EXPOSE 8080

# run the server on port 8080
ENTRYPOINT ["/go/bin/server", "-buildFiles", "/go/bin/dist", "-sharedFiles", "/go/bin/shared", "-port", "8080"]