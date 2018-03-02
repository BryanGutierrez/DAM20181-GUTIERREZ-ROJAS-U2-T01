interface Person{
    name:string;
    email:string;
    salary:number;
    active:boolean;
}

var people = Array<Person>();

function createPeople():void{
    let newPerson:any;
    for(let i = 0;i<10;i++){
        newPerson = {
            name:`Bryan${i}`,
            email:`i${i}@gmail.com`,
            salary:(i+100000),
            active: i%2==0?true:false
        }
        people.push(newPerson);
    }
    newPerson = {
        name:`Bryan GR`,
        email:`1@gmail.com`,
        salary:800000,
        active: true
    }
    people.push(newPerson);
    validaEmail();
    
}


function validaEmail():void{
    var pat = new RegExp('i[0-9]@gmail\.com');
    for(var a = 0; a<=10;a++){
        if(pat.test(people[a].email) && people[a].active){
            console.log(people[a]);
        }
    }
}

createPeople();