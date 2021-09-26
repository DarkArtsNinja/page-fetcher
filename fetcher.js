const request = require("request");
const fs = require('fs')
//**************************** */

const url = process.argv[2]
const localPath = process.argv[3];

const data = (url, localPath)=>{
  request(url, (error, response, body) => {
    if (error){
      console.log("not able to dl resource");
      return -1;
    }

    fs.writeFile(localPath, body, error => {
      if (error) {
        console.error(error)
        return
      }

      if (fs.existsSync(localPath)){
        console.log("File already exists")
        return -1;
      } else {
        console.log(`Downloaded and saved ${body.length} bytes to ${localPath}`)
      }
      //file written successfully
    })
  })
}

data(url, localPath);

