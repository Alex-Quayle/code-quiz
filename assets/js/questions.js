let questionTitle = document.getElementById("#question-title");
let questions = [
    {
      question: "Commonly used data types DO not include:",
      answers: ["strings", "booleans", "alerts", "numbers"]
    },
    {
      question: "The condition in an if/else statement is enclosed with ______.",
      answers: ["quotes", "curly brackets", "parenthesis", "square brackets"]
    },
    {
      question: "Arrays in JavaScript can be used to store  ______.",
      answers: ["numbers and strings", "other arrays", "booleans", "all of the above"]
    },
    {
      question: "String values must be enclosed within _____ when being assigned to variables.",
      answers: ["commas", "curly brackets", "quotes", "parenthesis"]
    },
    {
      question: "A very useful tool used during development and debugging for printing content to the debugger is:",
      answers: ["JavaScript", "terminal/bash", "for loops", "console.log"]
    }
  ];

// New elements are generated:
    // The question
    // options 1-4

// If correct, take away 10 seconds from clock and produce divider + feedback
// Else if wrong, produce divider and feedback
// Repeat for 3 questions then offer functionality to save high score