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
    {name:'maryam',age:18 , make:'programming'}
    ];

const filter = persons.reduce((pre,carentValue )=>{
    const firstChar = carentValue.name[0].toLocaleLowerCase();
    // console.log(firstChar);
    if(carentValue.name[0].toLocaleUpperCase()==firstChar){
        const result = pre.push({
            grop:carentValue.name[0],
            children:carentValue
        })
        // console.log(result);
        return result  
    }
    pre.push({
        grop:carentValue.name[0],
        children:carentValue
    })
},[])
    

// const sum = [...number,...number2]
console.log(filter);

// console.log(props); 


