package main

import (
	"fmt"
	"io"
	"net/http"
	"os"
)

// open file and stream directly from file to response
func (c *Configs) getResume(w http.ResponseWriter, r *http.Request) {
	// set path for resume file depending on if we are running on production server or locally
	filename := fmt.Sprintf("%s/resume.pdf", c.sharedFiles)

	// Open file
	f, err := os.Open(filename)
	if err != nil {
		fmt.Println(err)
		w.WriteHeader(500)
		return
	}
	defer f.Close()

	//Set header
	w.Header().Set("Content-type", "application/pdf")

	//Stream to response
	if _, err := io.Copy(w, f); err != nil {
		fmt.Println(err)
		w.WriteHeader(500)
	}
}
