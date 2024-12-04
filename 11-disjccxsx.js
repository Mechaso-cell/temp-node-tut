const {readFile, writeFile } = require('fs')

readFile('./Tutorial/content/subfolder/first.txt', 'utf8', (err, result)=> {
    if (err) {
        console.log(err);
        return;
    }
    //console.log(result);

    const first = result;
    readFile('./Tutorial/content/subfolder/second.txt', 'utf8', (err,result)=> {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;

        writeFile('./Tutorial/content/subfolder/result-async.txt',
            `Here is the result : ${first}, ${second}`,
            (err) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log('okay')
            }
        )

    })
})