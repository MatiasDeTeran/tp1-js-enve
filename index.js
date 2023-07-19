// Nos piden crear una matriz de 4×4 de números enteros que inicialmente esta vacía, nos piden hacer un menú con estas opciones:
// Rellenar TODA la matriz de números, debes pedírselo al usuario.
// Suma de una fila que se pedirá al usuario (controlar que elija una correcta)
// Suma de una columna que se pedirá al usuario (controlar que elija una correcta)
// Sumar la diagonal principal (ver ejemplo)
// Sumar la diagonal inversa (ver ejemplo)
// La media de todos los valores de la matriz
// IMPORTANTE: hasta que no se haga la primera opción, el resto de opciones no se deberán de ejecutar, simplemente mostrar un mensaje donde diga que debes rellenar la matriz.

function crearMatriz(filas){
    let matriz= [];
    for (i = 0; i < filas; i++){
        let fila = [];
        matriz.push(fila);
    }
    return matriz;


}

function cargarMatriz(matriz){
    columna=0; 
    for (let i = 0; i < matriz.length; i++){
        columna = columna + 1
        for (let j = 0; j < matriz.length; j++){
            nUsuario=parseInt(prompt("ingrese un numero para la posicion [" + columna + "," + (j+1) + "]" ));
            matriz[i].push(nUsuario);
        }
    }
    return matriz;
} 

function sumarFila(array){
    valorInicial=0
    array=array.reduce((acumulador, valorActual)=>{acumulador = acumulador + valorActual; return acumulador}, valorInicial)
    return array;
    
}



function sumarColumna(matriz, columna){
    sumador=0;
    for (i=0; i < matriz.length; i++){
        for(j=0; j < matriz[i].length; j++){
            if (j == (columna-1)){
                sumador = sumador + matriz[i][j];
            }    
        }
    }   
    return sumador;
}

function diagonalPrincipal(matriz){
    sumador= 0
    for ( i=0 ; i< matriz.length; i++){
        for (j=0; j< matriz[i].length; j++){
            if (i == j){
                sumador = sumador + matriz[i][j];
            }
        }
    }
    return sumador;
}


function diagonalInversa(matriz){
    contador = (matriz.length-1);
    sumador=0
    for (i = 0; i < matriz.length; i++){
        sumador = sumador + matriz[i][contador];
        contador = contador - 1;
    }
    return sumador;
}


function mediaMatriz(matriz){
    suma=0
    for (i = 0; i < matriz.length; i++){
        for (j = 0; j < matriz[i].length; j++){
            suma = suma + matriz[i][j];
        }
    }
    return suma/ (matriz.length*matriz[0].length);
}



function main (matriz){
    
    do {
        opcion = parseInt(prompt(
            `Elija una de la siguientes funciones :
            
            0- Salir del programa
            1- Rellenar la matriz
            2- Sumar una de las filas de la matriz
            3- Sumar una de las columnas de la matriz
            4- Sumar la diagonal principal de la matriz
            5- Sumar la diagonal inversa de la matriz
            6- Calcular la media de la matriz
            `))

        if(opcion >= 0 & opcion <= 6){

            switch(opcion){

                case 0:
                    alert("Cerrando programa...")
                    break;

                case 1:
                    cargarMatriz(matriz);
                    break;
                
                case 2:
                    if (matriz[0][0]==undefined){
                        alert("Debe completar la opcion 1")
                        break;
                    }else{
                        fila= parseInt(prompt("Ingrese una fila: "));
                        alert(sumarFila(matriz[fila-1]));
                        break;
                    }
                
                case 3:
                    if(matriz[0][0]==undefined){
                        alert("Debe completar la opcion 1")
                        break;
                    }else{
                        columna = parseInt(prompt("Ingrese una columna: "))
                        alert(sumarColumna(matriz, columna))
                        break;
                    
                    }
                case 4:
                    if(matriz[0][0]==undefined){
                        alert("Debe completar la opcion 1")
                        break;
                    }else{      
                        alert(diagonalPrincipal(matriz));
                        break;
                    }        
                case 5:
                    if(matriz[0][0]==undefined){
                        alert("Debe completar la opcion 1")
                        break;
                    }else{
                        alert(diagonalInversa(matriz));
                        break;
                    }    
                case 6:
                    if(matriz[0][0]==undefined){
                        alert("Debe completar la opcion 1")
                        break;
                    }else{
                        alert(mediaMatriz(matriz));
                        break;
                    }
            }
        }else {
            alert("La opcion ingresada es invalida")
        }    
    } while (opcion !== 0);
}

let matriz = crearMatriz(4);
main(matriz);