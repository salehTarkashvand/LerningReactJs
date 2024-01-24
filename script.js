let number = [1,2,3,4]
let number2 = [5,6,7,8]

const person = {name:'saleh',age:24 , make:'programming' , family:'torkashvand'}

const {...props} =person ;


function alaki ({name}){
console.log(name);
}

// alaki(person)
// const filter = persons.filter(({age}) => age < 20)

const persons = [
    {name:'saleh',age:24 , make:'programming'},
    {name:'hamed',age:19 , make:'programming'},
    {name:'mahmod',age:20 , make:'programming'},
    {name:'maryam',age:18 , make:'programming'},
    {name:'davood',age:18 , make:'programming'},
    {name:'danial',age:18 , make:'programming'}
    ];

 const result = persons.reduce((acc , person)=>{
    const [key] = person.name[0].toLocaleUpperCase();
    if(!acc[key]){
        acc[key] = {group:key , children : []}
    }
    acc[key].children.push(person)
    return acc

 },{})
    

// const sum = [...number,...number2]
console.log(result);

// console.log(props); 


