let alimentos=[
{nombre:"papa",tipo:"vegetal",calorias:250},
{nombre:"carne",tipo:"animal",calorias:100},
{nombre:"pollo",tipo:"animal",calorias:200},
{nombre:"yuca",tipo:"vegetal",calorias:300},
{nombre:"cilantro",tipo:"vegetal",calorias:100},
{nombre:"zanahoria",tipo:"vegetal",calorias:350},
{nombre:"mosca",tipo:"insecto",calorias:200},
{nombre:"abeja",tipo:"insecto",calorias:200},
{nombre:"baca",tipo:"animal",calorias:200},
{nombre:"mango",tipo:"vegetal",calorias:200},
{nombre:"papa",tipo:"vegetal",calorias:250},
{nombre:"carne",tipo:"animal",calorias:100},
{nombre:"pollo",tipo:"animal",calorias:200},
{nombre:"yuca",tipo:"vegetal",calorias:300},
{nombre:"cilantro",tipo:"vegetal",calorias:100},
{nombre:"zanahoria",tipo:"vegetal",calorias:350},
{nombre:"mosca",tipo:"insecto",calorias:200},
{nombre:"abeja",tipo:"insecto",calorias:200},
{nombre:"baca",tipo:"animal",calorias:200},
{nombre:"mango",tipo:"vegetal",calorias:200},
{nombre:"papa",tipo:"vegetal",calorias:250},
{nombre:"carne",tipo:"animal",calorias:100},
{nombre:"pollo",tipo:"animal",calorias:200},
{nombre:"yuca",tipo:"vegetal",calorias:300},
{nombre:"cilantro",tipo:"vegetal",calorias:100},
{nombre:"zanahoria",tipo:"vegetal",calorias:350},
{nombre:"mosca",tipo:"insecto",calorias:200},
{nombre:"abeja",tipo:"insecto",calorias:200},
{nombre:"baca",tipo:"animal",calorias:200},
{nombre:"mango",tipo:"vegetal",calorias:200},
{nombre:"papa",tipo:"vegetal",calorias:250},
{nombre:"carne",tipo:"animal",calorias:100},
{nombre:"pollo",tipo:"animal",calorias:200},
{nombre:"yuca",tipo:"vegetal",calorias:300},
{nombre:"cilantro",tipo:"vegetal",calorias:100},
{nombre:"zanahoria",tipo:"vegetal",calorias:350},
{nombre:"mosca",tipo:"insecto",calorias:200},
{nombre:"abeja",tipo:"insecto",calorias:200},
{nombre:"baca",tipo:"animal",calorias:200},
{nombre:"mango",tipo:"vegetal",calorias:200},
{nombre:"papa",tipo:"vegetal",calorias:250},
{nombre:"carne",tipo:"animal",calorias:100},
{nombre:"pollo",tipo:"animal",calorias:200},
{nombre:"yuca",tipo:"vegetal",calorias:300},
{nombre:"cilantro",tipo:"vegetal",calorias:100},
{nombre:"zanahoria",tipo:"vegetal",calorias:350},
{nombre:"mosca",tipo:"insecto",calorias:200},
{nombre:"abeja",tipo:"insecto",calorias:200},
{nombre:"baca",tipo:"animal",calorias:200},
{nombre:"mango",tipo:"vegetal",calorias:200}]

function Principal(alimentos,callback){
    let calorias=0
    setTimeout(function(){
      alimentos.forEach(function(alimento){
          if(alimento.tipo == "vegetal" && alimento.calorias>=200){
            calorias=calorias+alimento.calorias
            console.log(alimento.nombre)
          }
      })
        callback(calorias)
    },5000)
}
Principal(alimentos,function(calorias){
    console.log(calorias)
})
