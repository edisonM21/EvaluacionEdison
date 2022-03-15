function Principal(nombre,planeta,edad,estatura,callback){
    setTimeout(function(){
        let actividad={
            nombre:nombre,
            planeta:planeta,
            edad:edad,
            estatura:estatura,
        }
        callback(actividad)
    },10000)
}
Principal("Edison","Mustafar",100,1.70,function(actividad){
    if(actividad.edad<=15){
        console.log("Tu actividad a realizar es la de Manejo de la fuerza")
    }
    else{
        console.log("Tu actividad a realizar es la Manejo del sable de luz")
    }
})