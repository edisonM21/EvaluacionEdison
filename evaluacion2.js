let planos=new Array(11,50,60,9,9,9,9,9,9,9)
function Principal(planos,callback){  
    callback(planos)
}
Principal(planos,function(planos){
    let contador=0
    let plano1=0
    planos.forEach(function(plano){
        if(plano>=0 && plano<=10){
            contador=contador+1
            plano1=plano          
        }
    })
    if(plano1 >=0 || plano1 <=10){
        console.log("el numero de planos verdaderos es: "+contador)
        console.log("Puede abordar la nave")
    }else{
        console.log("No puede abordar la nave")
    }
})