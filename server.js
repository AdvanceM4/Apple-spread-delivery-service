const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/api/test", (req, res) => {

    res.json({
        message: "Apple Spread Delivery backend is working!"
    });

});

app.listen(PORT, () => {

    console.log(
        Server running on port ${PORT}
    );

});
