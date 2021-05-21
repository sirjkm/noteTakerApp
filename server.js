const express = require('express');

const app = express();

const PORT = process.env.port || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// SET UP ROUTES require('./API')(app);
// SET UP ROUTES require("./HTML")(app);


app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});