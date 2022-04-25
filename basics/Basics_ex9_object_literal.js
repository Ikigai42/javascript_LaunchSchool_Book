/*
9. Create an object named pets that contains a list of pet names and the type of animal. For instance:

Name	Animal
asta	dog
spot	dog
neptune	fish
darwin	lizard
*/

let pets = {
  asta: 'dog',
  spot: 'dog',
  neptune: 'fish',
  darwin: 'lizard',
  petsNames: function () {
    'use strict';
    return Object.keys(pets) + ' are all the pets.';
  },
};

console.log(pets.petsNames());
