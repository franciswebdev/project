// import _ from 'lodash';

import { hello } from './js/hello'; 
import { exercise } from './js/exercise'; 
import { exercises } from './js/exercises'; 
import { Person, Dude } from './js/classes/Person';

let hello1 = require('./js/hello');

function component() {
    const element = document.createElement('div');
    element.innerHTML = hello('oinkxxx');
  // Lodash, currently included via a script, is required for this line to work
    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
  }

document.body.appendChild(component());

exercise();
exercises();

const person = new Person("Jon", "B+", 12, "JonUser");
person.printName();


const dude = new Dude("C-");
dude.printName();
dude.printThat('d', 'z', 'r');

console.log(dude.userType, Dude.SHIRT);

let props = { color: 'red', size: 12 };
let { color: fill, size } = props;
fill = 'blue';
console.log(props, fill, size);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function echo<TT>(data: TT): TT {
  return data;
}

console.log(echo("nooo no no"));
console.log(echo(55));

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



function logger(isLogged: boolean) {

  function logMe(fn: Function) {
    fn.prototype.log = function() {
      console.log("log me", this.message);
    }
  }
  
  function logIt(fn: Function) {
    fn.prototype.log = function() {}
  }

  return isLogged ? logMe : logIt;
}

@logger(true)
class LogSample {
  private message: string;
  constructor(message: string = "initial message") {
    this.message = message;
  }
}

const logSample = new LogSample('xx');
(<any>logSample).log();