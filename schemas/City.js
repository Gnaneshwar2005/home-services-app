const mongoose = require('mongoose');

const CitySchema = new mongoose.Schema(
  {
    id: String,
    city: String,
    state: String,
    country: String,
  },
  { timestamps: true },  // i modifed timestamp to timestamps
  {
    collection: 'city',
  },
);
const Cities = mongoose.model('city', CitySchema);
module.exports = Cities;
