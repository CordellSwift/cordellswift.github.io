let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/591Ichigo_profile.png') {
      myImage.setAttribute ('src','images/images.jfif');
    } else {
      myImage.setAttribute ('src','images/591Ichigo_profile.png');
    }
}
