function writeTweet()
{
  var randIndex;
  var sentence;
  var intro = ["Have you ever noticed", "Sometimes I wonder", "What's the deal with", "Why is it that"];
  var body = [" cafeteria food is bland.", " this weather is perfect!", " gas is too expensive." , " schools almost out." , "  the sky is blue."];
  var end = ["Oh well." , "Too bad." , "Hmm."];
  randIndex = randomUpTo(intro.length - 1);
  sentence = intro[randIndex];
  randIndex = randomUpTo(body.length - 1);
  sentence = sentence + " " + body[randIndex];
  randIndex = randomUpTo(end.length - 1);
  sentence = sentence + " " + end[randIndex];
  document.getElementById("tweet").innerHTML = sentence;

}

//Generates a random whole number between 0 and max (inclusive)
function randomUpTo(max)
{
  return Math.floor(Math.random() * (max+1));
}
