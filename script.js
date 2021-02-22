const http = require('http');
const fs = require('fs');
const path = require('path');
const mime = require('mime')


const START_DIR = 'public'
const ROOT_FILE = path.join(START_DIR, 'html','index.html')
const ERR_404_FILE = path.join(START_DIR, 'html','404.html')
const DEBUG_MODE = true

if (DEBUG_MODE) {console.log(ROOT_FILE)}

const isDir = fileName => {
    return fs.lstatSync(fileName).isDirectory()
  }

function get_subdirs(my_dir) {
    if (DEBUG_MODE) { console.log(my_dir) }
    fs.readdirSync(my_dir).map(function(fileName) {
        return path.join(my_dir, fileName)
    }).filter(isDir).forEach(element => {
        server_path.push(element);
        get_subdirs(element) 
    })
}

let server_path = [START_DIR]
get_subdirs(START_DIR);

if (DEBUG_MODE) {console.log(server_path)};


const my_server = http.createServer((req, res)=>{
    
    // Сделать поиск по содержимому сайта
    // 1. по / и favicon.ico 
    // 2. public + URL
    // 3. По всей иерархии
    if (DEBUG_MODE) {console.log('Запрошено: ' + req.url)}
    let ret_file = ''
    switch(req.url) {
        case '/':
            ret_file = ROOT_FILE
            break
        case '/favicon.ico':
            ret_file = path.join(START_DIR,'img',req.url)
            break
        default: 
            ret_file = path.join(START_DIR,req.url)
            // console.log(ret_file)
            if (!fs.existsSync(ret_file)) {
                if (DEBUG_MODE) {console.log(`Адрес ${ret_file} не найден.... пробую искать ${req.url} в других папках`)}
                ret_file = ERR_404_FILE
                server_path.forEach(element => {
                    if (fs.existsSync(path.join(element,req.url))) {
                        ret_file = path.join(element,req.url)
                        // тут бы переписать на обычный фор.... или сам, но из-за дефицита времени оставим олдскульный форич
                        // да идет перебор до конца и это не оптимально, я обязательно переделаю.... потом...
                    }
                })  
            } 
            
    }

    if (DEBUG_MODE) {console.log('Отдаю: ' + ret_file)}
    res.setHeader('Content-Type', mime.getType(ret_file));
    if (DEBUG_MODE) {console.log('тип содержимого: ' + mime.getType(ret_file))}
    const ret_value = fs.readFileSync(ret_file)
    res.end(ret_value)
})

def_port = process.env.PORT || 3000

my_server.listen(def_port)
console.log(`Server run on ${def_port} port`)

