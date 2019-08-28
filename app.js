const express = require('express');
const app = express();


const { execFile } = require('child_process');
const child = execFile('gatsby', ['build'], {cwd: './gatsby'}, (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  console.log(stdout);
});

app.use('/',express.static('./gatsby/public'));

app.get('/users/login', (req, res) => res.send('Hello World!'));

const PORT = process.env.PORT || 5000; 

app.listen(PORT, () => console.log(`This server is running on prot ${PORT}.`))