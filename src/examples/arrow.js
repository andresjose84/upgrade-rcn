export const arrow = ( e ) => {
    e.preventDefault();
    const arr = [ 1, 2, 3, 4, 5 ];
    funcion1();
    arr.map( funcion2 );
    arr.forEach( funcion3 );
    const sum = funcion4( 1, 2 );
    console.log( 'Suma', sum );

    const newArray = arr.map(ele => ele * 2);
    console.log('El doble de cada elemento del array');
    console.table([...arr,...newArray]);

    const sumaArr = newArray.reduce((sum,ele)=>sum+ele,0);
    console.log('Suma de todos los valores del arreglo',sumaArr);

}

const funcion1 = () => {
    return console.log( 'funcion 1 no hace nada' );
};

const funcion2 = ele => {
    console.log( 'muestro el elemento', ele );
};

const funcion3 = ( ele, key ) => {
    console.log( `elemento llave ${key+1}`, `Valor ${ele}` );
};

const funcion4 = ( a, b ) => a + b;