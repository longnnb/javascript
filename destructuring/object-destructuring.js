let user = {
    firstname: 'Long',
    lastname: 'Nguyen',
    email: 'longnnb1@gmail.com',
    address: {
        block: 3,
        number: '15-19'
    }
}
const { firstname, lastname, email } = user
console.log(firstname, lastname, email)

const { firstname: first, lastname: last, email: mail } = user
console.log(first, last, mail)

const { block, number } = user.address
console.log(block, number)

//default value
const { address } = user
let { block: block1, number: number1, street = 'shimane' } = address
console.log(block1, number1, street = 'shimane')

function sayHi() {
    return {
        en: 'Hello',
        vn: 'Xin Chao',
        cn: 'Nihao',
        sp: 'Hola',
        fr: 'Salut'
    }
}

const { en: english, vn: vietnamese } = sayHi()


const person = {
    name: 'Max',
    age: 29,
    greet() {
      console.log('Hi, I am ' + this.name);
    }
  };
  
  const printName = ({ name }) => {
    console.log(name);
  };
  
  printName(person);
  
  const { name, age } = person;
  console.log(name, age);