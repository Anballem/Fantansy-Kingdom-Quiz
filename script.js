const questions= [
  {
    question: "What environment do you prefer?",
    answers: [
      { text: "Forest", type: "earth"},
      { text: "Volcanoes", type: "fire"},
      { text: "Mountain",type: "air"},
      { text: "Ocean", type: "water"}
    ]
  },
  {
    question: "Choose a personality trait:",
    answers:[
      {text: "Passionate", type: "fire"},
      {text: "Calm", type: "water"},
   {text: "Reliable", type: "earth"},
   {text:"Free-Spirited", type: "air"}
    ]
  },
  {
    question: "Your ideal weapon?",
    answers:[
      {text: "Flaming sword", type: "fire"},
      {text: "Trident", type: "water"},
      {text: "Hammer", type: "earth"},
      {text: "Air bow", type: "air"}
    ]
  },
  {
    question: "Pick a colour:",
    answers:[
      {text: "Red", type: "fire"},
      {text: "Blue", type: "water"},
      {text: "Green", type: "earth"},
      {text: "Yellow", type: "air"}
    ]
  },
  {
    question: "What matters most?",
    answers:[
      {text: "Power", type: "fire"},
      {text: "Peace", type: "water"},
      {text: "Stability", type: "earth"},
      {text: "Freedom", type: "air"}
    ]
  }
];

let currentQuestion = 0;
let scores= { fire: 0, water: 0, earth: 0, air: 0 };

function startQuiz(isRestart=false){
  if(isRestart){
    currentQuestion = 0;
    scores= { fire: 0, water: 0, earth: 0, air: 0 };
  }


  else{document.getElementById("intro").classList.add("hidden");

  document.getElementById("quiz").classList.remove("hidden");

  showQuestion();

  }
}
 
function showQuestion(){
  const q = questions[currentQuestion];
  document.getElementById("question").textContent = q.question;
  
  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  q.answers.forEach(answer => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.className= "w-full p-2 border rounded hover:bg-gray-100";
    button.onclick = () => selectAnswer(answer.type);
    answersDiv.appendChild(button);
  });
}

function selectAnswer(type){
  scores[type]++;
  currentQuestion++;

  if(currentQuestion < questions.length){
    showQuestion();
  } else {
    showResult();
  }
}

function showResult(){
  document.getElementById("quiz").classList.add("hidden");

  document.getElementById("result").classList.remove("hidden");

  const winner = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);

  const resultText = {
    fire: "You are a fierce warrior, bold and powerful!",
    water: "You are a calm, adaptable soul and wise like water!",
    earth: "You are grounded, strong, and reliable, just like the earth.",
    air: "You are free-spirited and creative, like the air."
  };

  document.getElementById("resultText").textContent = resultText[winner];
}

function restartQuiz(){
  currentQuestion= 0;
  scores= { fire: 0, water: 0, earth: 0, air: 0 };
  startQuiz(true);

  document.getElementById("quiz").classList.add("hidden");

document.getElementById("result").classList.add("hidden");

document.getElementById("intro").classList.remove("hidden");
}
