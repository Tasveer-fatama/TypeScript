function  data(a:number|string,b:number|string){
    if(typeof a==='number' && typeof b==='number'){
        return a+b
    }
    else{
return a.toString()+b.toString();
    }


}
console.log(data(12,56));
console.log(data('hena','riya'));
