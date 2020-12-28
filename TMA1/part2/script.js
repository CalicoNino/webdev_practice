function openSideNav() {
  document.getElementById("mySidenav").style.width = "150px";
}

function closeSideNav() {
  document.getElementById("mySidenav").style.width = "0px";
}

function readJSONquiz(file) {
  var req = new XMLHttpRequest();
  req.open("GET", file, false);
  req.send(null);
  var jsonfile = JSON.parse(req.responseText);
  return jsonfile
}

function buildQuiz(questions) {
  // variable to store the HTML output
  const output = [];

  // for each question...
  questions.forEach(
    (currentQuestion, questionNumber) => {

      // variable to store the list of possible answers
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {

        // ...add an HTML radio button
        answers.push(
          `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
            <div class="correct"></div>
          </div>`
      );
    }
  );

  // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join('');
}

function showSlide(n) {
  slides[currentSlide].classList.remove('active-slide');
  slides[n].classList.add('active-slide');
  currentSlide = n;
  if (currentSlide === 0) {
    previousButton.style.display = 'none';
  } else {
    previousButton.style.display = 'inline-block';
  }
  if (currentSlide === slides.length - 1) {
    nextButton.style.display = 'none';
    submitButton.style.display = 'inline-block';
  } else {
    nextButton.style.display = 'inline-block';
    submitButton.style.display = 'none';
  }
}

function showNextSlide() {
  showSlide(currentSlide + 1);
}

function showPreviousSlide() {
  showSlide(currentSlide - 1);
}

function showResults(questions, quiz, results) {

  // gather answer containers from our quiz
  const answerContainers = quiz.querySelectorAll('.answers');
  const correctContainers = quiz.querySelectorAll('.correct');

  // keep track of user's answers
  let numCorrect = 0;

  // for each question...
  questions.forEach((currentQuestion, questionNumber) => {

    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct
    if (userAnswer === currentQuestion.correctAnswer) {
      // add to the number of correct answers
      numCorrect++;

      // color the answers green
      answerContainers[questionNumber].style.color = 'lightgreen';
      correctContainers[questionNumber].innerHTML = `Correct!`
    }
    // if answer is wrong or blank
    else {
      // color the answers red
      answerContainers[questionNumber].style.color = 'red';
      correctContainers[questionNumber].innerHTML = `Correct answer is ${currentQuestion.correctAnswer}`
    }
  });

  // show number of correct answers out of total
  results.innerHTML = `${numCorrect} / ${questions.length}`;
}

// Variables
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

test = readJSONquiz("quizzes/quiz1.json");

// Kick things off
buildQuiz(test);

// Pagination
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

// Show the first slide
showSlide(currentSlide);

// Event listeners
submitButton.addEventListener('click', () => showResults(test, quizContainer, resultsContainer));
previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);