$(function() {
  $('#webmButton').click(function() {
    const testFolder = '/home/dillon/Desktop/imaweeb/public/images/webms';
    const fs = require('fs');
    var webfiles = [];
    fs.readdirSync(testFolder).forEach(file => {
      webfiles.push(file);
    })
    var i = Math.floor(Math.random() * (webfiles.length-1));
    var src = "../../images/webms/" + webfiles[i];
    $('#webm').find("#webmSource").attr("src", src);
    video.load();
  });
});
