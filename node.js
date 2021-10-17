
// //! -----------------------------------HW 14_10_21 -------------------------8----------------------------------------------------------------------------------------------------------

// const http = require('http');
// const chalk = require('chalk');
// const fs = require('fs');

// const indexHtml = './public/index.html'
// const aboutHtml = './public/about.html'
// const salesHtml = './public/sales.html'
// const prodHtml = './public/products.html'


// const pic1='./media/1.webp'
// const pic2='./media/2.webp'
// const pic3='./media/3.webp'
// const arrProdcts=[
//     {name:'car',price:900,img:`<img src="${pic1}">`},
//     {name:'car',price:900,img:`<img src="${pic2}">`},
//     {name:'car',price:900,img:`<img src="${pic3}">`}
// ]

// const arrProdctsJason=JSON.stringify(arrProdcts);


// const server = http.createServer((req, res) => {
//     console.log(req.method);
//     console.log(req.url);
//     if (req.url == '/') {
//         fs.readFile(indexHtml, 'utf8', (err, data) => {
//             console.log(chalk.red('cheack'));
//             res.write(data);
//             res.end();
//         })
//     } 

//     else if(req.url == '/about'){
//      fs.readFile(aboutHtml,'utf8',(err,data)=>{
//          res.write(data);
//          res.end()
//      })
//     }  

//     else if(req.url == '/sales'){
//         fs.readFile(salesHtml,'utf8',(err,data)=>{
//             res.write(data);
//             res.end()
//         })
//        }  

//        else if(req.url == '/products'){
//         fs.readFile(prodHtml,'utf8',(err,data)=>{
//             res.write(data);
//             res.end()
//         })
//        }  

//        else if(req.url == '/product'){

//             res.write(arrProdctsJason);
//             res.end()      
//        }  

//     else {
//         res.writeHead(404);
//         res.write(`https://cdn.pixabay.com/photo/2020/09/06/08/00/red-thread-5548304_960_720.jpg`);
//         res.end();
//     }

// })

// server.listen(8500)

// !------------------------------------------------- just for cheack ----------------------------------------------


const http = require('http');
const chalk = require('chalk');
const fs = require('fs');

const indexHtml = './public/index.html'
const aboutHtml = './public/about.html'
const salesHtml = './public/sales.html'
const prodHtml = './public/products.html'


const pic1 = './media/1.webp'
const pic2 = './media/2.webp'
const pic3 = './media/3.webp'
const arrProdcts = [
    { name: 'car', price: 900, img: `<img src="${pic1}">` },
    { name: 'car', price: 900, img: `<img src="${pic2}">` },
    { name: 'car', price: 900, img: `<img src="${pic3}">` }
]

const arrProdctsJason = JSON.stringify(arrProdcts);


const Server = http.createServer((req, res) => {
    console.log(req.url);
    console.log(req.method);
    //   res.write('waz ip');
    //   res.end();

    switch (req.url) {
        case '/':
            fs.readFile(indexHtml, 'utf8', (err, data) => {
                if (err) {
                    res.write('the page is not exist');
                    res.writeHead(404)
                }
                else {
                    res.write(data);
                    res.end();
                }
            })

            break;

        case '/about':
            fs.readFile(aboutHtml, 'utf8', (err, data) => {
                if (err) {
                    res.writeHead(404)
                    res.write('the page is not exist')
                }

                else {
                    res.write(data);
                    res.end();
                }
            })

            break;
        case '/sales':
            fs.readFile(salesHtml, 'utf8', (err, data) => {
                if (err) {
                    res.writeHead(404)
                    res.write('the page is not exist')
                }
                else {
                    res.write(salesHtml);
                    res.end();
                }
            })

            break;
        case '/products':
                res.write(arrProdctsJason);
                res.end();
            break;
        case '/product':
            for (const iterator of arrProdcts) {
                console.log(iterator);
                let jsonItertor=JSON.stringify(iterator);
                res.write(jsonItertor);
                res.write("https://cdn.pixabay.com/photo/2020/04/22/19/29/heart-5079717__340.png");

                res.end();
            }
            break;

        default:
            break;
    }

})
Server.listen(4990)



























