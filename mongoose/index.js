// const mongoose = require('mongoose');

// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://localhost:27017/movieApp');
// }
const mongoose= require('mongoose')
 mongoose.connect('mongodb://localhost:27017/movieApp')
 .then(()=>{
  console.log("CONNECTION OPEN!!!")
 })
 .catch(err => {
    console.log("OH NO ERROR")
    console.log(err)
 })

 const movieSchema = new mongoose.Schema({
  title:String,
  year:Number,
  score:Number,
  rating:String
 })
 const Movie = mongoose.model('Movie', movieSchema)
//  const amadeus = new Movie({title : 'Amadeus', year :1986, score : 9.2, rating :'R'})

/*Movie.insertMany([
   {title : 'Vikram', year :1985, score : 9.2, rating :'R'},
   {title : 'Vaathi', year :2003, score : 9.2, rating :'E'},
   {title : 'Varnamayiram', year :1985, score : 9.2, rating :'G'},
   {title : 'Veer', year :1985, score : 9.2, rating :'B'},
   {title : 'kaithi', year :1985, score : 9.2, rating :'C'}
])*/