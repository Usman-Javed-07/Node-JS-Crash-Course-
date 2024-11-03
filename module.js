//  every file is a module in js 

// const data = require('cli-color');

// console.log(data.red('hello usman how are you'));


// const auth = require('./auth.js')

// // register('usman javed');



// auth.register('usman javed');

// auth.login('usman javed' , 'secret');






//  core modules 

const path = require('path');


// dirname 
// console.log('Folder name :' , path.dirname(__filename)  );


// filename 
// console.log('File name :' , path.basename(__filename)  );


// extension 
// console.log('extension name :' , path.extname(__filename)  );


// parse 
// console.log('Parse :' , path.parse(__filename)  );


// join
// console.log('join :' , path.join(__dirname, 'order' , 'app.js')  );



// make a directory or folder 
const fs = require('fs');

// fs.mkdir(path.join(__dirname , '/test'), (err)=> {
//     if(err) {
//         console.log('face some eror while creating new directory');
//         return
//     }
//     console.log('new directory has been created');
    
// })




// create a file 

fs.writeFile (path.join(__dirname , 'test', 'test.txt'), 'hello node', (err) => {
     if (err) {
        throw (err)
     }
     console.log('file successfully created');
});