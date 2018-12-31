var answer = "";

while(answer !== "yes" && answer !== "Yes" && answer.indexOf("yes") === -1) {
  answer = prompt("Are we there yet?");
}

alert("YAY, we made it!");