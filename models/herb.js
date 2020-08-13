const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const herbSchema = new Schema({
    name: {
        type: String
    },
    benefits: {
        type: String
    },
    uses: {
        type: String
    },
    img: {
        type: String
    }
});

module.exports = mongoose.model('Herb', herbSchema);