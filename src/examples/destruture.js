export const desArray = ( e ) => {
    e.preventDefault();
    const arr = [ 10, 20, 30, 40, 50 ];
    let a, b, rest;
    [ a, b ] = arr;
    console.log( 'salida' );
    console.log( 'a', a );
    console.log( 'b', b );

    [ a, b, ...rest ] = arr;

    console.log( 'rest', rest );
};

export const desObject = ( e ) => {
    e.preventDefault();
    const obj = {
        a: 10,
        b: 20,
        c: 30,
        d: 40
    };
    let a, b, rest;
    ( {
        a,
        b
    } = obj );
    console.log( 'salida' );
    console.log( 'a', a );
    console.log( 'b', b );

    ( {
        a,
        b,
        ...rest
    } = obj );

    console.log( 'rest', rest );
};

export const desNested = ( e ) => {
    e.preventDefault();
    const arr = [ 10, 20, {
        x: 1,
        y: 2
    }, 40, {
        z: [ 1, 2, 3, 4 ],
        a1: {
            f: 1,
            g: 2
        }
    } ];

    const [ , , a, , b ] = arr;
    console.log( 'salida' );
    console.log( 'a', a );
    console.log( 'b', b );
    const {
        z: c,
        a1: {
            f
        }
    } = b;
    console.log( 'c', c );
    console.log( 'f', f );

};