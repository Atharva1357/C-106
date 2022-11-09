function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json', modelReady);
}

function modelReady(){
  classifier.classify(gotResults);
}
var animal1 = 0;
var animal2 = 0;

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;
    img = document.getElementById('animal_image');
    if (results[0].label == "Barking") {
      img.src = 'bark.gif';
      animal1 = animal1+1;
    } else if (results[0].label == "Meowing") {
      img.src = 'meow.gif';
      animal2 = animal2 + 1;
    } else{
      img.src = 'listen.gif';
    }
  }
}