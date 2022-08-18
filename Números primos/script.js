var limite = 10;
for (var numerador = 2; numerador < limite; numerador++){
   var count = 0;
    for(var denominador = 2; denominador <limite; denominador++){ 
      if(numerador%denominador===0){
         count = count + 1
      }      
   }
   if(count>1){
      console.log(numerador + " não é primo");
   }else{
      console.log(numerador+" é primo");
   }
}