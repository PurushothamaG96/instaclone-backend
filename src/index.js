const app = require('./App');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const port = 5000

dotenv.config();
//connect to DB
mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Successful Connected to DB')
})

app.listen(port, () => console.log(`Server is up at ${port} port`));
