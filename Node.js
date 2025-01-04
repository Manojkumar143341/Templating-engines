const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    const data = {
        title: "Welcome to My Website",
        message: "Hello, Express with EJS!",
        items: ["Item 1", "Item 2", "Item 3"]
    };
    res.render("index", data); 
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
