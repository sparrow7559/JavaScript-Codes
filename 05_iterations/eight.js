//reduce

const myNums=[1,2,3];

// const myTotal=myNums.reduce(function(acc,curval){
//     console.log(`acc: ${acc} and currval: ${curval}`);
    
//     return acc+curval;
// },0)

const myTotal=myNums.reduce((acc,currval)=>acc+currval,0);

console.log(myTotal);

const shoppingCart=[
    {
        itemName:"Js",
        price:2999
    },
    {
        itemName:"APP dev",
        price:999
    },
    {
        itemName:"HTML",
        price:599
    }
];

const priceToPay =shoppingCart.reduce((acc,item)=>acc+item.price,0)

console.log(priceToPay);
