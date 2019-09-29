var express = require('express');
var router = express.Router();
const videoController = require('../controllers/videoController')
const imageController = require('../controllers/imageController')
/* GET home page. */
router.get('/', async (req, res) => {
  let posts = [
    {
      "title": "Mr & Mrs Gao",
      "youtubeId": "QBopeSq8R9U",
      "imgId":"demo01.png"
    },
    {
      "title": "紅蓮華 - LiSA",
      "youtubeId": "iDnkegx5EBg",
      "imgId":"demo02.png"
    },
    {
      "title": "星屑ビーナス",
      "youtubeId": "xotYGvOt35Y",
      "imgId":"demo01.png"
    },
    {
      "title": "烟火里的尘埃",
      "youtubeId": "cVdNl3Pn9pk",
      "imgId":"demo02.png"
    },
    {
      "title": "【納斯卡線】",
      "youtubeId": "D3CaWmZm7fM",
      "imgId":"demo01.png"
    },
    {
      "title": "我們去餵鯊魚!!??",
      "youtubeId": "j0yPyM8R1uU",
      "imgId":"demo02.png"
    },
    {
      "title": "《台灣菁英戰士:陸戰蛙人》",
      "youtubeId": "NET3zonUcAU",
      "imgId":"demo01.png"
    },
    {
      "title": "獅王之路",
      "youtubeId": "vmnuj5SoG-o",
      "imgId":"demo02.png"
    },
    {
      "title": "超級工廠 LEGO",
      "youtubeId": "30gFXbeDlXA",
      "imgId":"demo01.png"
    }
  ]
  let featchRes = await videoController.getVideos()
  posts = featchRes.map(f => {
    return {
      title: f.title,
      youtubeId: f.youtubeId,
      createdAt: f.createdAt,
      imgUrl: `${req.protocol}://${req.hostname}/image/${f.imgId}`
    }
  })
  res.render('index', { title: 'aaaaa', posts });
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
