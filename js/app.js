

document.addEventListener("DOMContentLoaded", function() {

  var sampleName
  var splitName
  var nextNumber
  var nextId
  var number
  var sample = document.getElementById("sample")
  var back = document.getElementById("back")
  var id
  sample.innerHTML = 1;

  FastClick.attach(document.body);

  sample.addEventListener('touchstart', function(event) {
    id = "#" + sample.className
    sampleName = sample.className
    splitName = sampleName.split('-');
    number = splitName[1]
    console.log("current sample: " + id)
      if(number !== 0){
          __(id).ramp([1,0],[0.05])
          __(id).stop()
          __("#samplergain").attr({"gain": 1})
      }
    nextNumber = parseInt(number, 10) + 1
    nextId = "#" + splitName[0] + "-" + nextNumber
    sample.className = splitName[0] + "-" + nextNumber
    sample.innerHTML = nextNumber;
    console.log("next sample: " + nextId)
    __(nextId).start()
  })

  back.addEventListener('touchstart', function(event) {
    sampleName = sample.className
    splitName = sampleName.split('-');
    number = splitName[1]
    nextNumber = parseInt(number, 10) - 1
    if (nextNumber <= 0){nextNumber = 0}
    sample.className = splitName[0] + "-" + nextNumber
    sample.innerHTML = nextNumber;
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
  __().sampler({path:"/compost/samples/sam/mp3s/05spacey.mp3", id: "sam-5", loop:false}).connect("#samplergain");
  __().sampler({path:"/compost/samples/sam/mp3s/06tools.mp3", id: "sam-6", loop:false}).connect("#samplergain");

  __().sampler({path:"/compost/samples/hanna/mp3s/Water.mp3", id: "hanna-1", loop:false}).connect("#samplergain");
  __().sampler({path:"/compost/samples/hanna/mp3s/Prassel.mp3", id: "hanna-2", loop:false}).connect("#samplergain");
  __().sampler({path:"/compost/samples/hanna/mp3s/Fossit.mp3", id: "hanna-3", loop:false}).connect("#samplergain");
  __().sampler({path:"/compost/samples/hanna/mp3s/Flaska.mp3", id: "hanna-4", loop:false}).connect("#samplergain");
  __().sampler({path:"/compost/samples/hanna/mp3s/Door.mp3", id: "hanna-5", loop:false}).connect("#samplergain");


  __("#samplergain").attr({"gain": 1});

	cracked.soundLoaded = function(x) {
    console.log("sample loaded", x)
	}

  var onError = function(err) {
    console.log('The following error occured: ' + err);
  }
})