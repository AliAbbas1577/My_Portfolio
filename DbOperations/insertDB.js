const dbConnection=require('../mongodb');


const insert=async ()=>{
const db = await dbConnection();
const res=await db.insert(
    [
        {
            Name:"TC",Price:837,Model:"K9128"
        },
        {
            name:"Laptop",price:2337,Model:"D8291"
        },
        {
            name:"OPE",price:8137,Model:"TITO"
        }
    ]
    
  );
    if(res.acknowledged){
        console.log("data insert");

    }
    else
    console.log("not inserted");
}

insert();