const express = require("express");

const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors({ origin: '*' }));

require('dotenv').config();

const dbConfig  = require('./config/dbConfig');

const ArticleRoutes = require("./routes/articleRoutes");



app.use("/api/Articles", ArticleRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});