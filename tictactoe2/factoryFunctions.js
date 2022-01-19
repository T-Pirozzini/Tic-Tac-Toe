// SLOWER, MORE CLUTTERED METHOD
// const Travis = { name: 'Travis', age: 31, single: false };
// let Chris = { name: 'Chris', age: 23, single: false };

function greet(person){
  return("Hello, my name is " + person.name + ". I am " + person.age 
  + " years old and I am " + (person.single ? "" : "not") + " single");
}

// console.log(greet(Travis));
// console.log(greet(Chris));


// FACTORY FUNCTION METHOD
// const Person = function(name, age, single){
//   let person = {};
//   person.name = name;
//   person.age = age;
//   person.single = single;
//   return person;
// };
// const Travis = Person("Travis", 31, false);
// console.log(Travis);
// console.log(greet(Travis));


// TUTORIAL #2 - example 1
const him = {
  name: 'Sina',
  talk() {
    return `Hello I am ${this.name}`
  }
}

const ben = {
  name: 'Ben',
  talk() {
    return `Hello I am ${this.name}`
  }
}

function personFactory(name) {
  return {
    talk() {
      return `Hello I am ${name}`
    }
  }  
}

const me = personFactory('Travis');
const Chloe = personFactory('Chloe');


//example 2
function createElement(type, text, color) {
  const el = document.createElement(type)
  el.innerText = text
  el.style.color = color
  document.body.append(el)
  return {
    el,
    setText(text) {
      el.innerText = text
    },
    setColor(color) {
      el.style.color = color
    }    
  }  
};

let h1 = createElement('h1', 'Hey guys', 'red');

h1.setText('Goodbye fellas');

const p = createElement('p', 'Hello dudes', 'blue');







