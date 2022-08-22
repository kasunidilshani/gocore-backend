const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());

const posts = require('./routes/api/posts');   //link to posts.js file
app.use('/api/posts', posts);                  //http://localhost:5000/api/posts

const guide_reg = require('./routes/api/guide_Reg');
app.use('/api/guide_reg', guide_reg);

const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`Server started on port ${port}`));