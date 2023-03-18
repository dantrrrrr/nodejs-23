const fsPromise = require('fs').promises;
const path = require('path');

const fileOps = async () => {
    try {
        const data = await fsPromise.readFile(path.join(__dirname, 'hi.txt'), "utf8")//get data from file
        console.log(data)
        await fsPromise.unlink(path.join(__dirname, 'hi.txt')) //write data to new file
        await fsPromise.writeFile(path.join(__dirname, 'promiseTxt.txt'), data) //write data to new file
        await fsPromise.appendFile(path.join(__dirname, 'promiseTxt.txt'), "\n\nNice to fuck you bitch")//append data to file
        await fsPromise.rename(path.join(__dirname, 'promiseTxt.txt'), path.join(__dirname, 'promiseDone.txt')) //rename file
        const newData = await fsPromise.readFile(path.join(__dirname, 'promiseDone.txt'), "utf8")//get data from file
        console.log(newData)
    } catch (error) {
        console.error(error)
    }
}
fileOps();
// fs.readFile(path.join(__dirname, 'hi.txt'), "utf8", (err, data) => {
//     if (err) throw err;
//     console.log(data)
// })

console.log("read file nodejs")
//write
// fs.writeFile(path.join(__dirname, 'new-text.txt'), "Nice to see you bitch", (err, data) => {
//     if (err) throw err;
//     console.log("Write completed  !")
//     fs.appendFile(path.join(__dirname, 'new-text.txt'), 'Wanna  fuck bitch', (err, data) => {
//         if (err) throw err;
//         console.log("Append completed  ! \n")
//         fs.rename(path.join(__dirname, 'new-text.txt'), path.join(__dirname, 'new.txt'), (err, data) => {
//             if (err) throw err;
//             console.log("Rename completed  ! \n")
//         })
//     })
// })
process.on("uncaughtException", err => {
    console.error(`There was an uncaught exception error : \n ${err} \n`);
    process.exit(1);
})