/*
 * Project: Milestone 1
 * File Name: main.js
 * Description:
 *
 * Created Date: Oct 17
 * Author: Brock Yuan
 *
 */
const path = require("path");
const fs = require("fs")
const IOhandler = require("./IOhandler");
const zipFilePath = path.join(__dirname, "myfile.zip");
const pathUnzipped = path.join(__dirname, "unzipped");
const pathProcessed = path.join(__dirname, "grayscaled");

IOhandler.unzip(zipFilePath, pathUnzipped)
    .then((extractionComplete)=> console.log(extractionComplete))
    .then(()=> IOhandler.readDir(pathUnzipped))
    .then((PNGFiles) => {
                        Promise.all([IOhandler.grayScale(path.join(pathUnzipped,PNGFiles[0]),path.join(pathProcessed,PNGFiles[0]))
                                        .then((completeGreyScale)=> console.log(completeGreyScale)), 
                                     IOhandler.grayScale(path.join(pathUnzipped,PNGFiles[1]),path.join(pathProcessed,PNGFiles[1]))
                                        .then((completeGreyScale)=> console.log(completeGreyScale)),
                                     IOhandler.grayScale(path.join(pathUnzipped,PNGFiles[2]),path.join(pathProcessed,PNGFiles[2]))
                                        .then((completeGreyScale)=> console.log(completeGreyScale))])
                        })
    .catch((err) => console.log(err));