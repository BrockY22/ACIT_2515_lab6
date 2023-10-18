/*
 * Project: Milestone 1
 * File Name: IOhandler.js
 * Description: Collection of functions for files input/output related operations
 *
 * Created Date: Oct 17, 2023
 * Author: Brock Yuan
 *
 */

const AdmZip = require("adm-zip"),
  fs = require("fs"),
  PNG = require("pngjs").PNG,
  path = require("path");

/**
 * Description: decompress file from given pathIn, write to given pathOut
 *
 * @param {string} pathIn
 * @param {string} pathOut
 * @return {promise}
 */
const unzip = (pathIn, pathOut) => {
  
  //Step1: read zip file
  //Step2: unzip zip file
  //Step3: read all png images from unzipped folder
  //Step4: Send them to the grayscale filter function
  //Step5: After all images have successfully been grayscaled, show a success msg
  //ALL ERRORS MUST SHOW IN .catch in PROMISE CHAIN
  return new Promise((res,rej)=>{
    const zip = new AdmZip(pathIn);
    zip.extractAllToAsync(pathOut, true);
    res()


  })
};

/**
 * Description: read all the png files from given directory and return Promise containing array of each png file path
 *
 * @param {string} path
 * @return {promise}
 */
const readDir = (dir) => {};

/**
 * Description: Read in png file by given pathIn,
 * convert to grayscale and write to given pathOut
 *
 * @param {string} filePath
 * @param {string} pathProcessed
 * @return {promise}
 */
const grayScale = (pathIn, pathOut) => {};

module.exports = {
  unzip,
  readDir,
  grayScale,
};
