//Task 1
let a = 13;

if(a%3==0&&a%7==0){
console.log("3 ve 7 ye bolunur");
}
else if(a%3==0){
console.log("Yalniz 3 bolunur");
}
else if(a%7==0){
    console.log("Yalniz 7 bolunur");
    }
    else{
        console.log("7 ve 3 bolunmur ");
    }

// Task 2
let n=16;
let m=26;
let sum=0;
for (let i = n; i < m; i++) {
    if (i%2 !==0) {
        sum++;
    }
}
console.log(sum);


// Task 3
let x=16;
let y=26;
let sum1=0;
for (let i = x; i < y; i++) {
    if (i%2 !==0) {
        sum1+=i;
    }
}
console.log(sum1);




// Task 4
let num=5;
let sum2 =true
for (let i = 2; i < num; i++) {
    if (num%i==0) {
        sum2=false;
    }
}
if (sum2) {
    console.log("Sade");
}
else{
    console.log("Murekkebdi");
}



// Task 5
let arr =[1,2,4,6,7,9];
let sum3 =0;
for (let i = 0; i < arr.length; i++) {
   if (arr[i]%2==0) {
    sum3+=arr[i];
   }
    
}
console.log(sum3);


// TASK 6 
function totalRange(b,c) {
if(typeof b !=='number' || typeof c !=='number' || isNaN(b) || isNaN(c))    {
    return 'Her iki parametr reqem olmalidir.'
}

let sum4 = 0;

for (let i = b; i <= c; i++) {
    
    sum4+=i;
}

return sum4;

}
let b=10;
let c=15;
let result = totalRange(b,c);

console.log(result);
