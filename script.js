let userName = "oge";

userName ? console.log(`${userName},asked`) : console.log(`Hello`);

const userQuestion = console.log(`${userName}, will i see a supercar today?`);

let randomNumber = Math.floor(Math.random() * 8);

console.log(randomNumber);

let eightBall = '';



switch (randomNumber) {
  case 1:
    console.log('It is certain');
    break;
  case 2:
    console.log('It is decidedly so');
    break;
  case 3:
    console.log('Reply hazy try again');
    break;
  case 4:
    console.log('100%!...you'll definitely see one today');
    break;
  case 5:
    console.log('Do not count on it');
    break;
  case 6:
    console.log('My sources say no');
    break;
  case 7:
    console.log('sure...if you leave by 11:30am');
    break;
  case 8:
    console.log('yes');
    break;
}
console.log(eightBall);
