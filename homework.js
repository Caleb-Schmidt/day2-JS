//==========Exercise #1 ===========//
/*
Write a function that passes through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
function desc(alist){
    for(let item in alist)
    {
        console.log(`${item}: `)
        if(alist[item] instanceof Object)
        {
            if(alist[item][0] instanceof Object)
            {
                for(let key in alist[item][0])
                {
                    console.log(`\t${key}: `)
                    console.log(`\t\t${alist[item][0][key]}`)
                }
            }
            else
            {
                for(let part in alist[item])
                {
                    console.log(`\t${alist[item][part]}`)
                }
            }
        }
        else
        {
            console.log(`\t${alist[item]}`)
        }
    }
}
desc(person3)



//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/
function Human(name, age)
{
    this.name = name;
    this.age = age;

    // Use an arrow to create the printInfo method
    this.printInfo = function()
    {
        return `Name: ${this.name} \nAge: ${this.age}`
    }

    this.addAge = function(person)
    {
        return person.age += 1
    }
}

const billy = new Human("Billy", 18)
console.log(billy.printInfo())
console.log(billy.addAge(billy))
console.log(billy.addAge(billy))
console.log(billy.addAge(billy))

const jody = new Human("Jody", 78)
console.log(jody.printInfo())
console.log(jody.addAge(jody))
console.log(jody.addAge(jody))
console.log(jody.addAge(jody))
// Create our Person Prototype

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to 
    determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small word"
*/

const isLarge = (astring) =>
{
    return new Promise((resolve, reject) =>
    {
        if (astring.length > 10)
        {
            resolve(true)
        }
        else
        {
            reject(false)
        }
    })
}

isLarge("Marco").then(
    () =>
    {
        console.log("Big Word")
    }
).catch(
    ()=>
    {
        console.log("Small Word")
    }
)