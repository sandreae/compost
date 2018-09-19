

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
    sample.className = "sample-" + nextNumber
    sample.innerHTML = nextNumber;
    console.log(sample.className)
  })

  __().sampler({path:"/compost/samples/1_clapogg.mp3", id: "sample-1", loop:false}).gain({id: "samplergain"}).connect("dac");
  __().sampler({path:"/compost/samples/2_clapogg.mp3", id: "sample-2", loop:false}).connect("#samplergain");
  __().sampler({path:"/compost/samples/3_clapogg.mp3", id: "sample-3", loop:false}).connect("#samplergain");
  __().sampler({path:"/compost/samples/4_clapogg.mp3", id: "sample-4", loop:false}).connect("#samplergain");

  __("#samplergain").attr({"gain": 1});

	cracked.soundLoaded = function(x) {
    console.log("sample loaded", x)
	}

  var onError = function(err) {
    console.log('The following error occured: ' + err);
  }
})