function isPrime(number:number) : boolean
{
    let isCheck = true;

    if (number < 2)
    {
        isCheck = false;
    }
    else
    {
        if (number > 2)
        {
           for (let i = 2; i <= number/2;i++)
           {
               if (number % i == 0)
               {
                   isCheck = false;
                   break;
               }
           }
        }
    }
    return isCheck;
}
let array = [1, 5, 9, 2, 6, 15, 19, 37, 51, 53];
let sum = 0;
for (let number of array) {
    if (isPrime(number))
    {
        sum += number;
    }
}
console.log("Tổng các số nguyên tố trong mảng trên là: " + sum);