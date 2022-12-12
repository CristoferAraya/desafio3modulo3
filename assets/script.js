//function pintar() {//
    //ele = document.getElementById("ele1")
    //ele.style.backgroundColor = 'yellow'
//}
//ele = document.getElementById("ele1")
//ele.addEventListener("click", pintar);

//Modificar para no tener que seleccionar el elemento cada vez que se llama a oa funcion
//ele = document.getElementById("ele1");
//ele.addEventListener("click", function() {
//    ele.style.backgroundColor = 'yellow'
//});

//Modificar para recibir un parametro, por defecto green 
pintar = (ele, color = 'green') =>  ele.style.backgroundColor = color ;
        
ele = document.getElementById("ele1");
ele.addEventListener("click", () => pintar(ele, 'red'));