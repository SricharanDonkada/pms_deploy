const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.static('./dist/pms'));

app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: './dist/pms/'}
  );
});

app.listen(4001);