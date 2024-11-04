
//  http module 

const http = require('http');

const fs = require('fs');
const path = require('path');



const app = http.createServer((req, res)=> {
    console.log(req.url);
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err , content)=> {
           
            
            if(err) {
                throw err
            }
            res.end(content)
        })
    } else if (req.url === '/about') {
        fs.readFile(path.join(__dirname, 'public', 'about.html'), (err , content)=> {
            if(err) {
                throw err
            }
            res.end(content)
        })
    }

 
//  res.end('<h1> http module in node js ....  </h1>')
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> {
    console.log(`listing on port ${PORT}`);
    
})