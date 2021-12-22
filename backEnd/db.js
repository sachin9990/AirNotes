const mongoose = require('mongoose')

const mongoURI = "mongodb://localhost:27017/airnotes?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Mongo se safalata-poorvak joda jaa chuka hai...")
    })
}

module.exports = connectToMongo