// #todo

'use strict';

const instructions = `Two-Player Remembery

  Player 1:
    enter three phrases

  Player 2:
    see the three phrases in order
    then enter them back in order
    if you get one wrong - game over!
`;
alert(instructions);

alert('Player 2: go hide');

const phrase1 = prompt('Player 1, enter your first phrase:');
const phrase2 = prompt('Player 1, enter your second phrase:');
const phrase3 = prompt('Player 1, enter your third phrase:');

alert('Player 2, get back here');

const questionPhrase = alert(`Player 2, remember these:
1. ${phrase1},
2. ${phrase2},
3. ${phrase3},`);

let score = 3;

const question1 = prompt('Player 2, please enter phrese 1:');
if (phrase1 !== question1) {
  score--;
}

const question2 = prompt('Player 2, please enter phrese 2:');
if (phrase2 !== question2) {
  score--;
}

const question3 = prompt('Player 2, please enter phrese 3:');
if (phrase3 !== question3) {
  score--;
}

alert(`You have ${score} score`);
