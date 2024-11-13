/*Step 46
You're getting closer! At this point, you're encountering what's known as an off-by-one error, a frequent problem in zero-based indexing languages like JavaScript.

The first index of your rows array is 0, which is why you start your for loop with i = 0. But repeating a string zero times results in nothing to print.

To fix this, add 1 to the value of i in your .repeat() call. Do not assign it back to i like you did in your loop conditions.*/

const character = "#";
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
    rows.push(character.repeat(i +1))
}