const os= require('os')
const path=require('path')
//console.log(os.type())
//console.log(os.version())
//console.log(os.freemem())
//console.log(os.cpus())
//console.log(__filename)
//console.log(__dirname)
console.log(path.dirname(__filename))//directory name along with path
console.log(path.basename(__filename))//just filename
console.log(path.extname(__filename))// extention


console.log(path.parse(__filename))