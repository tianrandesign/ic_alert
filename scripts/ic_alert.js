var animation = lottie.loadAnimation({
  container: document.getElementById("lottie"),
  renderer: "svg",
  loop: true,
  autoplay: false,
  path: "ic_alert.json"
	
});

document.getElementById('lottie').addEventListener('mouseover', function(){ animation.play(); })
document.getElementById('lottie').addEventListener('mouseleave', function(){ animation.stop(); });