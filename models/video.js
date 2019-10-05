const mongoose = require('mongoose')

const videoSchema = new mongoose.Schema({
  title: String,
  imgUrl: String,
  youtubeId: String
},{ timestamps: { createdAt: 'createdAt' }})

module.exports = mongoose.model('Video', videoSchema)