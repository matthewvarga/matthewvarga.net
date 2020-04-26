package main

import (
	"errors"
	"flag"
)

/**
* checks if a specified flag was passed.
* name - name of the flag
 */
func isFlagPassed(name string) bool {
	found := false
	flag.Visit(func(f *flag.Flag) {
		if f.Name == name {
			found = true
		}
	})
	return found
}

func loadFlags() (buildFiles, sharedFiles *string, port *int, e error) {
	// load flags
	buildFilesFlag := flag.String("buildFiles", "", "location of static build files")
	sharedFilesFlag := flag.String("sharedFiles", "", "location of shared files")
	portFlag := flag.Int("port", 8080, "port the server is to run on")
	flag.Parse()

	// verify proper flags are provided
	if !isFlagPassed("buildFiles") {
		return nil, nil, nil, errors.New("Missing Flag: -buildFiles")
	}
	if !isFlagPassed("sharedFiles") {
		return nil, nil, nil, errors.New("Missing Flag: -sharedFiles")
	}
	if !isFlagPassed("port") {
		return nil, nil, nil, errors.New("Missing Flag: -port")
	}

	return buildFilesFlag, sharedFilesFlag, portFlag, nil
}
