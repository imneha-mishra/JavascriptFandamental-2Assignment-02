const students=[{
    name:"Mithun",
    markes:95
},
{
    name:"Prabir",
    markes:75
},
{
    name:"Alka",
    markes:92
},{
    name:"Shivam",
    markes:70
},
{
    name:"Farman",
    markes:99
},
]

const checkResults=(name)=>{
     
   for(let student of students){
    if(student.name === name){
        return student.markes > 90 ?
        console.log(`Congratulations ${student.name} ! you have cleared the exam`):
        console.log(`Sorry ! you have not cleared the exam.`);
    }
   }

  console.log("Invalid Users!!!");
}
checkResults( "Mithun")
checkResults( "Prabir")
checkResults( "Mithun S")