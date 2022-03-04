$(".myGrid3 div").each((index, element) => {
  index += 1; //1 indexed
  element = $(element);
  element.css("grid-row", index);
  if(index % 2 == 0){
    element.css("grid-column", 1);
  }
  else {
    element.css("grid-column", 2);
  }
});

AOS.init();


$(function(){

	var cheer = new Howl({
		src: ['mixkit-mystwrious-bass-pulse-2298.wav'],
		volume: 0.5
	});

	$("#howler-play").on("click", function(){
		cheer.play();
	});

	$("#howler-pause").on("click", function(){
		cheer.pause();
	});

	$("#howler-stop").on("click", function(){
		cheer.stop();
	});

  $("#howler-volup").on("click", function(){
		var vol = cheer.volume();
		vol += 0.1;
		if (vol > 1) {
			vol = 1;
		}
		cheer.volume(vol);
	});

	$("#howler-voldown").on("click", function(){
		var vol = hcheer.volume();
		vol -= 0.1;
		if (vol < 0) {
			vol = 0;
		}
		cheer.volume(vol);
	});

});
