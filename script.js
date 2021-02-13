const http = require('http');
const fs = require('fs');
const path = require('path')

const START_DIR = 'public'
const ROOT_FILE = path.join(START_DIR, 'html','index.html')

console.log(ROOT_FILE)

const isDir = fileName => {
    return fs.lstatSync(fileName).isDirectory()
  }

function get_subdirs(my_dir) {
    // console.log(my_dir)
    fs.readdirSync(my_dir).map(function(fileName) {
        return path.join(my_dir, fileName)
    }).filter(isDir).forEach(element => {
        server_path.push(element);
        get_subdirs(element) 
    })
}

let server_path = [START_DIR]
get_subdirs(START_DIR);


console.log(server_path);


const my_server = http.createServer((req, res)=>{
    
    //console.log(fs.existsSync('./public/img/favicon.ico'))
    // Сделать поиск по содержимому сайта
    // 1. по / и favicon.ico 
    // 2. public + URL
    // 3. По всей иерархии
    console.log(req.url)
    const ret_value = fs.readFileSync(ROOT_FILE)
    res.end(ret_value)
})

def_port = process.env.PORT || 3000

my_server.listen(def_port)
console.log(`Server run on ${def_port} port`)
