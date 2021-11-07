let synth = new Tone.Synth().toMaster();
let note1 = document.getElementById("Note1")
let note2 = document.getElementById("Note2")
let note3 = document.getElementById("Note3")
let note4 = document.getElementById("Note4")
let bgM = document.getElementById("bgM")
let drum1 = document.getElementById("drum1")
let drum2 = document.getElementById("drum2")
let drum3 = document.getElementById("drum3")

var bgMusic = []; //Array of all the drums audo elements
bgMusic.push(drum1);
bgMusic.push(drum2);
bgMusic.push(drum3);
var isPlaying = 0; //keeps track of whether the music is playing

var current = 0; //Keeps track of user's current drum selection
let bgDrum = bgMusic[current]; //stores the current track

document.body.addEventListener('keydown', (event) => {

  if(event.code == 'Space'){
    if (isPlaying == 1){
      bgDrum.pause();
      isPlaying = 0;
    }
    current =  (current + 1) % bgMusic.length;
    bgDrum = bgMusic[current];
    if (isPlaying == 0){
      bgDrum.play();
      isPlaying = 1;
    }

  }else if(event.key == 'a'){
    synth.triggerAttackRelease('C5', '4n')
    note1.style.backgroundColor = "orange";
  }else if(event.key == 's'){
    synth.triggerAttackRelease('D5', '4n')
    note2.style.backgroundColor = "orange";
  }else if(event.key == 'd'){
    synth.triggerAttackRelease('E5', '4n')
    note3.style.backgroundColor = "orange";
  }else if(event.key == 'f'){
    synth.triggerAttackRelease('G5', '4n')
    note4.style.backgroundColor = "orange";
  }
})

document.body.addEventListener('keyup', (event) => {
  if(event.key == 'a' || event.key == 's'|| event.key == 'd'|| event.key == 'f' ){
    note1.style.backgroundColor = "white";
    note2.style.backgroundColor = "white";
    note3.style.backgroundColor = "white";
    note4.style.backgroundColor = "white";
  }
})

bgM.addEventListener('click', () => {
  if (isPlaying == 0){
    bgDrum.play();
    isPlaying = 1;
  }
  else{
    bgDrum.pause();
    isPlaying = 0;
  }
})

/*player.addEventListener('timeupdate', () => {
  console.log("the current time is:", player.currentTime)

  if(player.currentTime > 5){
    interactable.style.borderRadius = "30px";
  }
})*/
