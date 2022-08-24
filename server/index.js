const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());


//POST
const posts = require('./routes/api/posts');   //link to posts.js file
app.use('/api/posts', posts);                  //http://localhost:5000/api/posts

const guide_reg = require('./routes/api/guide_Reg');
app.use('/api/guide_reg', guide_reg);

const guide_add_plan = require('./routes/api/guide_add_Plan');
app.use('/api/guide_add_plan', guide_add_plan);



//GET
const view_tour_plan = require('./routes/api/view_tour_Plan');
app.use('/api/view_tour_plan', view_tour_plan);

const guide_profile_load = require('./routes/api/guide_profile_Load');
app.use('/api/guide_profile_load', guide_profile_load);

const guide_login_home = require('./routes/api/guide_login_Home');
app.use('/api/guide_login_home', guide_login_home);


const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`Server started on port ${port}`));