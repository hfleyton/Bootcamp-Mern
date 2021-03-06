const express = require('express');
const app = express();
const cors = require('cors');

require('./config/mongoose.config')();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', require('./routes/api'));
/* require('./server/routes/api')(app);
 */

app.listen(8000, () => {
    console.log("Listening at Port 8000");
});