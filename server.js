const express = require('express');
const app = express();

//Server static filess

app.use(express.static('public', {
   setHeaders: (res, path, stat) => {
       if (path.endsWith('.wasm')) {
            res.set('Content-Type', 'application/wasm')
       }
   }
}));


app.listen(6969, () => {
    console.log(`Server running on port 6969`)
})