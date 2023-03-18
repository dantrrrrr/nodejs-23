const fs = require('fs');
if (!fs.existsSync('news')) {

    fs.mkdir('news', (err) => {
        if (err) throw err;
        console.log("directory created")
    })
}
if (fs.existsSync('news')) {

    fs.rmdir('news', (err) => {
        if (err) throw err;
        console.log("directory remove")
    })
}