import express from 'express';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))


const dataList = [];



app.get("/", (req, res) => {
    res.render("index.ejs", { dataList });
});

app.post('/yourRoute', (req, res) => {
    const data = req.body.textInput;
    dataList.push(data);
    res.redirect('/');
  });

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});