'use strict';



const decorator = func => {
    return (...args) => {
        console.log(`Function name is ${func.name}`);
        func.call(this, ...args);
    }
}

const hello = about => console.log(`This is a ${about}`);


const decoratedFunc = decorator(hello);
decoratedFunc('higher order decorator function');