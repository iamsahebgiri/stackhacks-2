const express = require("express");
const app = express();


app.get("/", (req,res) => {
    res.send("Hey");
})

app.listen(3001, () => {
    console.log("Server running in port 3001...")
});