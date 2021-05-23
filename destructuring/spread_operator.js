// Spread Operator ... vs ...rest operator
// ...spread -> split array
// ...rest -> join into array

// Spread Operator ...
const iphones = ["iphone4", "iphone5", "iphone6"];
const macbooks = ["macbook2012", "macbook2013", "macbook2014"];

// 1. concat array
const appleProducts = [...iphones, 'iphone7', 'iphone7s', 'mackbook2011', ...macbooks, 'macbook2015']
console.log(appleProducts)

// 2. spread a string
console.log(...'Hello World')

// 3. Copy array
const oldModels = [...iphones]
oldModels[0] = 'iphone3s'
console.log(iphones)
console.log(oldModels)

// 4. in function
function sum() {
    var total = 0
    // console.log(arguments)
    for (const value of arguments) {
        total += value
    }
    return total
}

const values = [69, 96, 1, 21, 1, 12, 3]
console.log(sum(...values))

// -- ...rest
// 1. parameter of function 
// 2. destructuring

function calculateGPA(math, literature, ...rest) {
    console.log(rest)
    return ((math * 2 + literature * 2 + sum(...rest)) / (rest.length + 4))
}

console.log(calculateGPA(8, 6, 5, 4, 3))

const VietNamTeam = [
    "Nguyen Huu Thang",
    "Nguyen Cong Phuong",
    "Luong Xuan Truong",
    "Nguyen Van Toan",
    "Nguyen Tuan Anh",
    "Phan Van Hau",
    "Ha Duc Chinh"
];

const [coach, captain, ...players] = VietNamTeam
console.log(players)

/* ================== */

// can use for both object and array
const person = {
    name: 'Max',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

const copiedPerson = { ...person };
console.log(copiedPerson);

const hobbies = ['Sports', 'Cooking'];
const copiedArray = [...hobbies];
console.log(copiedArray);

const toArray = (...args) => {
    return args;
};

console.log(toArray(1, 2, 3, 4));