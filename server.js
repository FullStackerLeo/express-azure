const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors())
app.use(express.static('public'));  //static

app.use((req, res, next) => { 
    res.status(404).send( 
        "<h3>How many programmers does it take to change a light bulb? None, it's a hardware problem.</h3>") 
}) 

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {console.log(`Server listening on port ${PORT}`);});

