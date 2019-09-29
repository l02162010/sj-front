document.body.addEventListener('mouseover',function(e){
  var evt = (e.target || this);
  if (evt.className === 'video'){
    !!(evt.paused) && evt.play();
  }
});

document.body.addEventListener('mouseout',function(e){
  var evt = (e.target || this);
  if (evt.className === 'video'){
    !(evt.paused) && evt.pause();
  }
});
