import { users } from "./comment.js";


// 1ый уровень
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNumbers = numbers.filter(number => {
  return number >= 5;
})
console.log(newNumbers);

const furniture = [
  'table',
  'chair',
  'bookcase',
  'bed',
];
const result = furniture.find(item => item === 'table');
console.log(result);

function reverseArray(array) {
 array.reverse()
}
reverseArray(furniture);
reverseArray(numbers);
console.log(furniture);
console.log(numbers);

// 2ой уровень
const usersWithPostId = users.map(user => ({
  ...user,
  postId: user.id <= 5 ? 2 : 1
}));
console.log(usersWithPostId)

const newUsers = users.filter(user => user.email.includes('com'));
console.log(newUsers);

function addIsInvalid(users) {
 return users.map((user) => {
    return {
      ...user,
      isInvalid: user.body > 180 ? true  : false  ,
    }
  })
};
console.log(addIsInvalid(users))

const usersWithIdAndName = users.map(user =>({
  "id": user.id ,
  "name": user.name,
}));
console.log(usersWithIdAndName);

// 3ий уровень
const arrayMail = users.reduce((acc ,user) => {
  acc.push(user.email);
  return acc
}, []);
console.log(arrayMail);

const usersMail = users.map(item => item.email);
console.log(usersMail);

const addToString = usersMail;
console.log(addToString.toString());

const addJoin = usersMail;
console.log(addJoin.join(' - '));