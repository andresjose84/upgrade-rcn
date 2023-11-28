export const spreading = ( e ) => {
    e.preventDefault();
    const args = [ 0, 1, 2 ];
    const args2 = args;
    const sum = myFunction( ...args );
    const sum2 = myFunction2( 3, 4, 5 );
    console.log( 'sum ', sum );
    console.log( 'sum 2', sum2 );
};

const myFunction = ( a, b, c ) => {
    return a + b + c;
}

const myFunction2 = ( ...arr ) => {
    return arr.reduce( ( acum, ele ) => ( acum += ele ), 0 );
}