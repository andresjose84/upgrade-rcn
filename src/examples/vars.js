export const varScope = (e) => {
    e.preventDefault();
    var i = 'function scope';
    if ( true ) {
        var i = 'block scope';
        console.log( 'Block scope i is: ', i );
    }
    console.log( 'Function scope i is: ', i );
    return i;
}

export const letScope = (e) => {
    let i = 'function scope';
    e.preventDefault();
    if ( true ) {
        let i = 'block scope';
        console.log( 'Block scope i is: ', i );
    }
    console.log( 'Function scope i is: ', i );
    return i;
}

export const constScope = (e) => {
    e.preventDefault();
    const i = 'function scope';
    if ( true ) {
        const i = 'block scope';
        console.log( 'Block scope i is: ', i );
    }
    console.log( 'Function scope i is: ', i );
    return i;
}
/*
const constVar = 'some string';
let letVar = 'some string';
var varVar = 'some string';

(function() {
  console.log('constVar',window.constVar); // prints undefined
  console.log('letVar',window.letVar); // prints undefined
  console.log('varVar',window.varVar); // prints 'some string'
})();

*/