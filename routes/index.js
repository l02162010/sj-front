var express = require('express');
var router = express.Router();
const videoController = require('../controllers/videoController')
const imageController = require('../controllers/imageController')
/* GET home page. */
router.get('/', async (req, res) => {
  let posts = []
  let featchRes = await videoController.getVideos()
  posts = featchRes.map(f => {
    return {
      title: f.title,
      youtubeId: f.youtubeId,
      createdAt: f.createdAt,
      imgUrl: f.imgUrl
    }
  })
  res.render('index', { title: 'Light Freeze', posts });
});

router.get('/image/:imgId',async (req, res) => {
  let data = {
    id: req.params.imgId
  }
  let imageRes = await imageController.getImageById(data)
  if(imageRes){
    res.contentType(imageRes.contentType);
    res.send(imageRes.source);
  }else{
    // TODO預覽圖
    res.statusCode(404);
  }
});

module.exports = router;
