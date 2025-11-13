function call(){
    let count:number = 0;

    return{
        increment:()=>{
            count++;
        },
        getCount:()=>{
            return count
        },
        decrease:()=>{
            count--;
        }
    }
}


let count = call()
count.increment()
count.increment()
console.log(count.getCount());
count.decrease()
console.log(count.getCount());

