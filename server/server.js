const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();


// load middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use('/', require('../server/routes/pianoKeyRoutes'));

app.listen(8080, (error) => {
  if (error) {
      console.error("This is the: ", error)
      return
  }
  console.info('Server successfully running on port 8080')
});