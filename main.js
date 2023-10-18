
/*
 * Project: Milestone 1
 * File Name: main.js
 * Description:
 *
 * Created Date:
 * Author:
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
    //.then((filtedArray) => console.log(filtedArray))
    
    
    //.then((grayScaleComplete) => console.log(grayScaleComplete))
    .catch((err) => console.log(err))