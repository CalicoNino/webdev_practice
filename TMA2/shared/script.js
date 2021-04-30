// Ability to open the sidenav
function openSideNav() {
  document.getElementById("mySidenav").style.width = "150px";
}

// Ability to open the sidenav
function closeSideNav() {
  document.getElementById("mySidenav").style.width = "0px";
}

//reads local json file and returns it's content
function readJSONquiz(file) {
  var req = new XMLHttpRequest();
  req.open("GET", file, false);
  req.send(null);
  var jsonfile = JSON.parse(req.responseText);
  return jsonfile
}

//https://www.sitepoint.com/simple-javascript-quiz/
function buildQuiz(quizQuestions, quizContainer) {
  // variable to store the HTML output
  const output = [];

  // for each question...
  quizQuestions.forEach(
    (objQuestion, nbQuestion) => {

      // variable to store the list of possible answers
      const answers = [];

      // and for each available answer...
      for (choice in objQuestion.choices) {

        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${nbQuestion}" value="${choice}">
            ${choice} :
            ${objQuestion.choices[choice]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="slide">
          <div class="question"> ${objQuestion.question} </div>
          <div class="answers"> ${answers.join("")} </div>
          <div class="correct"></div>
        </div>`
      );
    }
  );

  // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join('');
}

//https://www.sitepoint.com/simple-javascript-quiz/
function showResults(quizQuestions, quizContainer, resultsContainer) {

  // gather answer containers from our quiz
  const answerContainers = quizContainer.querySelectorAll('.answers');
  const correctContainers = quizContainer.querySelectorAll('.correct');

  // keep track of user's answers
  let numCorrect = 0;

  // for each question...
  quizQuestions.forEach((objQuestion, nbQuestion) => {

    // find selected answer
    const answerContainer = answerContainers[nbQuestion];
    const selector = `input[name=question${nbQuestion}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct
    if (userAnswer === objQuestion.answer) {
      // add to the number of correct answers
      numCorrect++;

      // color the answers green
      answerContainers[nbQuestion].style.color = 'lightgreen';
      correctContainers[nbQuestion].innerHTML = `Correct!`
    }
    // if answer is wrong or blank
    else {
      // color the answers red
      answerContainers[nbQuestion].style.color = 'red';
      correctContainers[nbQuestion].innerHTML = `Correct answer is ${objQuestion.answer}`
    }
  });

  // show number of correct answers out of total
  resultsContainer.innerHTML = `${numCorrect} out of ${quizQuestions.length}`;
}