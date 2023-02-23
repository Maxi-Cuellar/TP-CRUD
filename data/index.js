const { json } = require("express");
const fs = require("fs");
const path = require("path");


module.exports = {
    readJSON : (JSON) => {
        return JSON.parse(fs.readFileSync(path.resolve(__dirname, json)))
    }
}