const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const router = express.Router();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

    
app.use('/', express.static('public'));

router.post('/api', (req, res) => {
    const {option1, option2, input1} = req.body;
    let str = `${input1} ${option2} ${option1}`
    fs.writeFile(path.resolve('../data.txt'), Buffer.from(str), (err, data) => {
        console.log(data);
    })
    res.send('success');
})


router.get('/show', (req, res) => {
    fs.readFile(path.resolve('../data.txt'), (err, data) => {
        if (err) {
            console.log(err);
        }
        res.send(data);
    })

})





app.listen(3000, () => {
    console.log('server is running');
});