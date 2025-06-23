let count = 5;
let x=[];
while(count>x.length)
{
    let y = Math.floor(Math.random()*5);
    if(x.includes(y)){}
    else{
          x.push(y);
    }
}

console.log(x);
const otp = Number(x.join(""))
console.log(otp);







