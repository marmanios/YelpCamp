const axios = require("axios");

module.exports.descriptors = [
    'Forest',
    'Ancient',
    'Petrified',
    'Roaring',
    'Cascade',
    'Tumbling',
    'Silent',
    'Redwood',
    'Bullfrog',
    'Maple',
    'Misty',
    'Elk',
    'Grizzly',
    'Ocean',
    'Sea',
    'Sky',
    'Dusty',
    'Diamond'
]

module.exports.places = [
    'Flats',
    'Village',
    'Canyon',
    'Pond',
    'Group Camp',
    'Horse Camp',
    'Ghost Town',
    'Camp',
    'Dispersed Camp',
    'Backcountry',
    'River',
    'Creek',
    'Creekside',
    'Bay',
    'Spring',
    'Bayshore',
    'Sands',
    'Mule Camp',
    'Hunting Camp',
    'Cliffs',
    'Hollow'
]

module.exports.getImage = async () => {
    try {
        const resp = await axios.get('https://api.unsplash.com/photos/random', {
            params: {
                client_id: process.env.UNSPLASH_KEY,
                collections: 1114848,
            },
        })
        return resp.data.urls.small
    } catch (err) {
        console.error(err)
    }
}