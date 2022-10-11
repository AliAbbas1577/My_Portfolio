const dbConnection=require('../mongodb');


const UpdateData=async()=>{
    let data=await dbConnection();
    let res=await data.updateOne(
        {Name:"Camera"},{
        $set:{Name:"Yica"}
        }
    );
    console.log(res);
}
UpdateData();