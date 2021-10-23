
var myarreglo= [
    {"usuario":"Ana","contraseña": "1122"},
    {"usuario":"Juan","contraseña": "1122"},
    {"usuario":"Mario","contraseña": "1122"}
];

var personas=["Carlos","Javier","Paula","Marina","Jose"];

const j= 0;
var m=0;

function ok(){
    var nombre='hola'; 
    let cc=123;
    cc= true;

    nombre= "hola 'mundo' ";

    //nombre="hola a todos";
    
    alert(nombre + ' '+ cc+ ' '+j);
    //console.log(nombre);

}

function ww(){
    var numero=prompt('dame un número');
    var arreglo=["carlos","daniel",12,"alejandro"];
    /*alert(arreglo[1]);
    console.log(numero);
    document.write(numero);*/

    /*if(numero > 4){
        alert('es amyor que 4');
    }else if (numero < 4){
        alert('no es mayor qie 4');
    }else{
        alert('es igual a 4');}*/
    
    switch(parseInt(numero)){
        case 1:
            alert('el número es: 1');
            break;
        case 2:
            alert('el número es: 2');
            break;
        case 3:
            alert('el número es: 3');
            break;
        case 4:
            alert('el número es: 4');
            break
        case 5:
            alert('el numero es: 5');
            break
    }}

function bc(){
    ///for(i=0; i<myarreglo.length; i++){
        for( var i=0 in myarreglo){
        console.log("for in"+ i)
        //console.log("for in: "+myarreglo[i]['usuario']);
    }

        for(var m of personas){
        console.log("for of: "+m)
        m=m+1;
        }
}
