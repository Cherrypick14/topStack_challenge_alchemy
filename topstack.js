function topDouble(value, topStack){

    let previousValue;

    while(true){
        previousValue = value;
        value = value * 2;
              
         console.log(`topDouble: ${previousValue} -> ${value}`);
         
         if(value >= topStack){
            return previousValue
         }
    }

}
module.exports = topDouble;