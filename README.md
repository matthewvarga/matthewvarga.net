# matthewvarga.net

This is code for my personal webpage, which can be viewed by visiting either matthewvarga.net, or matthew-varga.com.

The root of the repository contains a Dockerfile to build and run the applciation. This is particularly useful as the production server I have running this project is also running a few other web apps, all behind a reverse-proxy (nginx). 

## Development

Currently, I have not setup a Dockerfile for local development, though it is something I would like to add in the future. So in order to begin development, you must first have installed Go, Nodejs, and npm. 

Once you have those installed, you can navigate to the *static* directory, and execute the command `npm install` to complete the installation of all frontend dependencies. 

Next, ensure you have all Go dependencies installed by retrieving the following dependencies:

`go get github.com/gorilla/mux`

`go get golang.org/x/crypto/acme/autocert` (temporarily requried for ssl)

Now that all dependencies are installed, you can begin development. 

If you are working solely on **frontend** static changes, you need not to run the server, and can simply run `npm start` from the *statc* directory. This will open a development server on http://localhost:80 in which you can view the changes. 

However, if you are working on the **backend**, or if you require interaction between the frontend and backend, you must have the server running. To do so, first build the frontend files by running `npm run build` from the *static* directory. Next run `go run . -buildfiles "../static/dist" - sharedFiles "./files" -port 80` from the *server* directory. This will open a development server on http://localhost:80.

A breakdown of the configuration flags:

- `-buildFiles` specifies the location of the static buildfiles (default: static/dist).
- `-sharedFiles` `specifies the location of any files that the backend may serve to the frontend (default: server/files/).
- `port` specifies the port to run the application on

**Note**: sudo priveledges may be required when running either commands, as they utilize port 80 by default, opposed to port 8080.

## Deployment

The application is currently deployed behind a reverse-proxy (nginx) on an Ubuntu machine, along with other webapp projects I have been working on. For a full breakdown on the deployment of this project, see https://github.com/matthewvarga/nginx-docker-webapps.
