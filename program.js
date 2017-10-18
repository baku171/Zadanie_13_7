var fs = require('fs');

fs.readdir('./', 'utf-8', function(err, data){
    console.log(data);
    fs.writeFile('./tekst.txt', data.join('\n'), 'utf-8', function(err) {
        if (err) throw err;
        console.log('Zapisano');
        fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
            console.log('Dane po zapisie'.blue)
            console.log(data);
        });
    });
});

