
const sample = require('./food.json');


let allItems = sample.forEach((i)=>{   // list all the food items.
    console.log(i.foodname);
});

let veg = sample.filter((i)=>{          //list all food item with vegetable category.
    return i.category === 'Vegetable';
}).forEach((i)=>{
    console.log( i.foodname);
});
console.log(veg);

let fruit = sample.filter((i)=>{          //list all food item with vegetable category.
    return i.category === 'Fruit';
}).forEach((i)=>{
    console.log(i.foodname);
});;
console.log(fruit);

let protein = sample.filter((i)=>{          //list all food item with vegetable category.
    return i.category === 'Protein';
}).forEach((i)=>{
    console.log(i.foodname);
});
console.log(protein);

let grain = sample.filter((i)=>{          //list all food item with vegetable category.
    return i.category === 'Grain';
}).forEach((i)=>{
    console.log(i.foodname);
});
console.log(grain);

 let nuts = sample.filter((i)=>{          //list all food item with vegetable category.
     return i.category === 'Nuts';
 }).forEach((i)=>{
    console.log(i.foodname);
});
 console.log(nuts);

 let dairy = sample.filter((i)=>{        //list all food item with dairy category.
     return i.category === 'Dairy';
 }).forEach((i)=>{
    console.log(i.foodname);
});

 console.log(dairy);


 //list all the food items with calorie above 100

 let calAbove = sample.filter((i)=>{
    return i.calorie > 100;
 }).forEach((i)=>{
    console.log(i.foodname);
 });

 console.log(calAbove);


// list all the food items with calorie below 100

 let calBelow = sample.filter((i)=>{
    return i.calorie < 100;
 }).forEach((i)=>{
    console.log(i.foodname);
 });

 console.log(calBelow);

//list all the food items with highest protien content to lowest

let highProtein = sample.sort((a,b)=>{
    return b.protiens - a.protiens;
})
.map(i =>{
    console.log(i.foodname);
});


//list all the food items with lowest cab content to highest

let highCarb = sample.sort((a,b)=>{
    return a.cab - b.cab;
})
.map(i =>{
    console.log(i.foodname);
});