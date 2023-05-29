const express = require("express");
const app = express();
const port = 3000;

//====Listening====//
app.listen(port, () => {
  console.log("Listening on port 3000");
});

//====Routes====//

//===Number 1: Greeting===//

app.get("/greeting", (req, res) => {
  res.send(`Hello, stranger`);
});

app.get("/:name", (req, res) => {
  let person = req.params.name;
  res.send(`${person}! It's so great to see you!`);
});

//===Number 2: Tip Calculator===//

app.get("/tip/:num1/:num2", (req, res) => {
  let total = req.params.num1;
  let tipPercentage = req.params.num2 / 100;
  // used template literal to avoid express interpreting number as a status code
  res.send(`${total * tipPercentage}`);
});

//===Number 3: Magic 8 Ball ===//

app.get("/magic/:question", (req, res) => {
  const fortunes = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
  ];
  let question = req.params.question;
  let fortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  res.send(`${question}: ${fortune}`);
});

//===Number 4: Fibonacci===//

app.get("/fibonacci/:number", (req, res) => {
  let input = parseInt(req.params.number);

  function fibNum(input) {
    let num1 = 0;
    let num2 = 1;
    let num3 = num1 + num2;

    while (num3 <= input) {
      if (input === num3) {
        return true;
      }
      num1 = num2;
      num2 = num3;
      num3 = num1 + num2;
    }
    return false;
  }
  fibNum(input)
    ? res.send("Very good. It is Fibonacci.")
    : res.send("I can tell this is not a fibonacci number.");
});
