let number = [1,2,3,4]
let number2 = [5,6,7,8]

const person = {name:'saleh',age:24 , make:'programming' , family:'torkashvand'}

const {...props} =person ;

// THIS CODE 

const persons = [

    {name:'saleh', age:24 , make:'programming'},

    {name:'hamed', age:19 , make:'programming'},

    {name:'mahmئod', age:20 , make:'programming'},

    {name:'maryam', age:18 , make:'programming'}

    ];

const result = persons.reduce((acc , person)=>{
// kalame aval migire
        let key = person.name[0]
// inja cheack mikone if acc (ke ye object hastesh) iage nist biya ye perperty ezafe kon namesh dynamik az line 24 ke keshidim biron bezar onja
    // {h:{group:a , children:[]}
    // dar lahze aval in misza bad miad pain meghdar mide line31 hala bain kar kare ma rahat tar mishe dige lazem nist search konim 
    if(!acc[key]){
            acc[key] = {group:key , children : [] }
        }
    // kafiye homn key ke darim dobare mieghdar mide age nabshe az ghabl misze 
        acc[key].children.push(person)
        return acc
// defult value ye object mikonim ke khile rah tare modiritesh chon bazaresh darim tabidlesh konim
    },{})
console.log(result);
//inja miad key object delete mikone ke  akhar tabdil mikone   object.values()  serach kon
let t = Object.values(result)

console.log(t);







