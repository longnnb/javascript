const dinner = { meal: 'tacos' }

const handler = {
  abc : 'abc',
  get(target, prop, receiver) {
    // console.log(`target: ${target}`, `prop: ${prop}`)
    // return Reflect.get(...arguments)
    return 'yay i have a lot of ' + target[prop]
  }
}

const proxy = new Proxy(dinner, handler)

console.log(proxy.meal)

proxy.meal = 'noodle'

console.log(dinner.meal)

dinner.meal = 'rice'

console.log(proxy.meal)

const user = {
  firstName: 'John',
  lastName: 'Doe'
}

const getFullName = function (user) {
  return `${user.firstName} ${user.lastName}`;
}


const getFullNameProxy = new Proxy(getFullName, {
  apply(target, thisArg, args) {
      return target(...args).toUpperCase();
  }
});

console.log(getFullNameProxy(user)); // 