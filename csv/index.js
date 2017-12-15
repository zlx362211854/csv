/**
 * @Author zlx
 * @Date 2017/12/13 下午3:09
 */
const fs = require('fs');
var stringify = require('csv-stringify');
var iconv = require('iconv-lite');

var Iconv = require('iconv').Iconv;

var utf16_to_utf8 = new Iconv('UTF16LE', 'UTF8');
var utf8_to_utf16 = new Iconv('UTF8', 'UTF16LE');


// const head = require('./test.js');
// const bom = head.bom;
// console.log(bom)
var saas = utf16_to_utf8.convert(fs.readFileSync('./file/products_SaaS.csv'));
var local = utf16_to_utf8.convert(fs.readFileSync('./file/products_Local.csv'));

// var test = utf16_to_utf8.convert(fs.readFileSync('./test.csv'));
// test = test.toString();
// console.log(test.split('\n')[3].split('\t').length);
// let example = utf8_to_utf16.convert(saas);
// fs.writeFile('./example.csv', example, (err) => {
//     if (err) {
//         console.log('操作失败!')
//         return
//     }
// })



saas = saas.toString();
local = local.toString();

// console.log(saas)
const saasRows = saas.split('\n').slice(0);  // Rows
// console.log(saasRows)

// saasRows.forEach((i, index) => {
//     console.log(i.split('\t').length)
// })
// console.log(saasRows[1].split('\t').length)

// const saasColLength = saasRows[1].split('\t').length; // saas 列数  68列
const localRows = local.split('\n'); // localArr Rows
// console.log(localRows)
const localRowsLength = localRows.length; // 行数


for (let i = 0; i < localRowsLength; i++) {
    if (i < 3) {
        localRows[i] = saasRows[i];
    }
}
console.log(localRows, 59)
const localRowsStr = localRows.join('\n');
console.log(localRowsStr, 60)
// console.log(localRows[0])
// for (let i = 0; i < localRowsLength; i++) {
//     if (i < 3) {
//         localRows[i] = saasRows[i];
//     }
// }

// localRows.forEach(i => {
//     console.log(i.length)
// })
//
// localRows.forEach(row => {
//     row.forEach(col => {
//         if (col == '') {
//             col = '\t';
//         }
//     })
// })

// console.log('----------------')
// localRows.forEach(i => {
//     console.log(i.length)
// })
// for (let i = 0; i < localRowsLength; i++) {
//     if (Array.isArray(localRows[i])) {
//         localRows[i] = localRows[i].join('\t');
//     }
// }
stringify(localRowsStr, (err, out) => {
    if (out) {
        // 保存文件
        console.log(out)
        out = utf8_to_utf16.convert(out);
        console.log(out)

        // var saasBak = utf16_to_utf8.convert(fs.readFileSync('./file/products_SaaS.csv'));
        // saasBak = saasBak.toString();
        // const saasBuffer = new Buffer(saasBak);
        // console.log(saasBuffer)
        // console.log(saasBuffer, 'buffer')
        // console.log(saasBuffer.slice(0, 2), 'bufferSlice')
        // out.write('fe', 0, 2);
        // out.fill('ff', 0, 1);
        // out = Buffer.concat([saasBuffer.slice(0, 2), out]);
        // console.log(out)

        fs.writeFile('./test.csv', out, (err) => {
            if (err) {
                console.log('操作失败!')
                return
            }
        })
    }
});


