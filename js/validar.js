function ww(){//buscar una palabra en un campo determinado
    var x=RegExp(/sol/i);
    var y= document.getElementById('palabra');

    if (x.test(y.value)){
        alert('si esta');
    }else{
        alert('no está');
    }
}

function ww2(){//buscar una letra en un rango determinado
    var x=RegExp(/[a-z]/i);
    var y= document.getElementById('palabra');
    
    if (x.test(y.value)){
        alert('si esta');
    }else{
        alert('no está');
    }
}

function ww3(){
    var x=RegExp(/[xz]/i);
    var y= document.getElementById('l_establecidas');

    if (x.test(y.value)){
        alert('si esta');
    }else{
        alert('no está');
    }
}

function correo(){
    var x=RegExp(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[com|co|org|es|gov]+$/);
    var y= document.getElementById('correo');

    if (x.test(y.value)){
        alert('si esta');
    }else{
        alert('Lo sentimos solo se permite letras[a-z]');
    }
}

function contraseña(){
    var x=RegExp(/[A-Z]+\w{5,}/);
    var y= document.getElementById('contraseña');

    if (x.test(y.value)){
        alert('si cumple');
    }else{
        alert('no cumple');
    }
}



