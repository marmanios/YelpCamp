const mongoose = require("mongoose");
const Campground = require("../models/campground");
const Review = require("../models/review");
const { reviewSchema } = require("../schemas");
const cities = require("./cities")
const { descriptors, places, getImage } = require("./seedHelpers")

mongoose.connect("mongodb://localhost:27017/yelp-camp", {
    useNewUrlParser: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection Error:"));
db.once("open", () => {
    console.log("DB Connected!");
});

const sample = (array) => array[Math.floor(Math.random() * array.length)]

const seedDB = async () => {
    await Campground.deleteMany({});
    await Review.deleteMany({});
    for (let i = 0; i < 25; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const camp = new Campground({
            author:"62dd839880b120670cb3c20c",
            title: `${sample(descriptors)} ${sample(places)}`,
            geometry: { coordinates: [ cities[random1000].longitude, cities[random1000].latitude ], type: 'Point' },
            images: [{
                url:await getImage(),
                filename: "Image1"
            },
            {
                url:await getImage(),
                filename: "Image2"
            }],
            description: "lorem ipsum quadrat emus dos nus turat",
            price: (Math.floor((Math.random() * 20 + 10.99) * 100) / 100)
        })
        await camp.save();

    }
    console.log("done")
}

seedDB().then(() => { mongoose.connection.close(); });