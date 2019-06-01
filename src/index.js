import { choice, remove } from './helpers';
import foods from './foods';

var food = choice(foods);
console.log("I'd like one" + food + ', please');

console.log('Here you go:' + food);

console.log('Delicious! May I have another?');

remove(foods, food);

var left = foods.length;

console.log("I'm sorry, we're all out. We have " + left + ' left.');
