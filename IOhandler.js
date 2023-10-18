
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
    zip.extractAllToAsync(pathOut, true, (err)=>{
      if(err){
        rej(err)
      }
      else{
        res("Extraction operation complete")
      }
    });
  });
};

/**
 * Description: read all the png files from given directory and return Promise containing array of each png file path
 *
 * @param {string} path
 * @return {promise}
 */
const readDir = (dir) => {
  return new Promise((res,rej)=>{
    fs.readdir(dir, (err, files) =>{
      if(err){rej(err)}
      else{
        res(files.filter((file)=>path.extname(file)===".png"));
      }

    });
  });

};

/**
 * Description: Read in png file by given pathIn,
 * convert to grayscale and write to given pathOut
 *
 * @param {string} filePath
 * @param {string} pathProcessed
 * @return {promise}
 */
const grayScale = (pathIn, pathOut) => {
  return new Promise((res,rej)=>{
    const readableStream = fs.createReadStream(pathIn);
    readableStream.on("error", (err)=>{rej(err)});
    readableStream.pipe(new PNG({})).on("parsed",function(){
      for (let y = 0; y < this.height; y++){
        for(let x = 0; x < this.width;x++){
            let idx = (this.width * y + x) << 2;

            const grayCol = (this.data[idx]*0.2126 + this.data[idx+1]*0.7151+ this.data[idx+2]*0.0722);
            this.data[idx] = grayCol;
            this.data[idx+1] = grayCol;
            this.data[idx+2] = grayCol;
        }
      }
      const writeableStream = fs.createWriteStream(pathOut);
      this.pack()
        .on("error", (err)=>{rej(err)})
        .pipe(writeableStream)
        .on("finish", ()=> {res(`${path.basename(pathIn)} has been Gray Scaled SUCCESSFULLY!`)});  
    })
  });
};

module.exports = {
  unzip,
  readDir,
  grayScale,
};