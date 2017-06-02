const test = require('tape');
const Random = require('random-js');

/*
Game Input

Within an infinite loop, read the heights of the mountains from the standard
input and print to the standard output the index of the mountain to shoot.

Input for one game turn

8 lines: one integer mountainH per line. Each represents the
height of one mountain given in the order of their index (from 0 to 7).

Output for one game turn

A single line with one integer for the index of which mountain
to shoot.

Constraints

0 ≤ mountainH ≤ 9
Response time per turn ≤ 100ms
*/

function readline() {
  const max = 9;
  const random = new Random();
  return random.integer(0, 9);

  // Use random-js
}

// Solve using iterator
// https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20%26%20beyond/ch3.md
const Scanner = {
  [Symbol.iterator]() {
    const stop = 7;
    let count = 0;

    return {
      [Symbol.iterator]() {
        return this;
      },

      next() {
        if(count <= stop) {
          count++;
          return {
            value: readline(),
            done: false
          }
        }

        return {
          done: true
        }
      }
    }
  }
};

const threat = [...Scanner].reduce((accum, curr) => curr > accum ? curr : accum, -1);
console.log(threat);
