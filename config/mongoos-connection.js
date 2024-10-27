const mongoose = require('mongoose');

const mongoUri = "mongodb://127.0.0.1:27017/instaclone"; // Ensure this is correct

mongoose.connect(mongoUri, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
})
.then(() => {
    console.log('Mongoose connection established');
})
.catch(err => {
    console.error(`Mongoose connection error: ${err}`);
});
