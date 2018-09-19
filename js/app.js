

document.addEventListener("DOMContentLoaded", function() {

  var sampleName
  var splitName
  var nextNumber
  var number
  var sample = document.getElementById("sample")
  var id
  sample.innerHTML = 1;

  FastClick.attach(document.body);

  sample.addEventListener('touchstart', function(event) {
    id = "#" + sample.className
    console.log(id)
    __(id).start()
    sampleName = sample.className
    console.log(sampleName)
    splitName = sampleName.split('-');
    number = splitName[1]
    nextNumber = parseInt(number, 10) + 1
    sample.className = splitName[0] + "-" + nextNumber
    sample.innerHTML = nextNumber;
    console.log(sample.className)
  })

  __().sampler({path:"/compost/samples/gus/mp3s/Sb1 dithering.mp3", id: "gus-1", loop:false}).gain({id: "samplergain"}).dac();
  __().sampler({path:"/compost/samples/gus/mp3s/Sb2 children.mp3", id: "gus-2", loop:false}).connect("#samplergain");
  __().sampler({path:"/compost/samples/gus/mp3s/Sb3 symb.mp3", id: "gus-3", loop:false}).connect("#samplergain");
  __().sampler({path:"/compost/samples/gus/mp3s/Sb4 fjaeril.mp3", id: "gus-4", loop:false}).connect("#samplergain");
  __().sampler({path:"/compost/samples/gus/mp3s/Sb5 muted tones.mp3", id: "gus-5", loop:false}).connect("#samplergain");

  __().sampler({path:"/compost/samples/sam/mp3s/01chord.mp3", id: "sam-1", loop:false}).connect("#samplergain");
  __().sampler({path:"/compost/samples/sam/mp3s/02drops.mp3", id: "sam-2", loop:false}).connect("#samplergain");
  __().sampler({path:"/compost/samples/sam/mp3s/03water.mp3", id: "sam-3", loop:false}).connect("#samplergain");
  __().sampler({path:"/compost/samples/sam/mp3s/04bomb.mp3", id: "sam-4", loop:false}).connect("#samplergain");
  __().sampler({path:"/compost/samples/sam/mp3s/05space.mp3", id: "sam-5", loop:false}).connect("#samplergain");
  __().sampler({path:"/compost/samples/sam/mp3s/06tools.mp3", id: "sam-6", loop:false}).connect("#samplergain");



  __("#samplergain").attr({"gain": 1});

	cracked.soundLoaded = function(x) {
    console.log("sample loaded", x)
	}

  var onError = function(err) {
    console.log('The following error occured: ' + err);
  }
})