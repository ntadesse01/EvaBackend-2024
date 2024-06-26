const mysql2 = require("mysql2");

const dbConnection = mysql2.createPool({
  user: process.env.USER,
  database: process.env.DATABASE,
  host: process.env.HOST,
  password: process.env.PASSWORD,
  connectionLimit: 10,
});
// console.log(process.env.JWT_SECRET)
module.exports = dbConnection.promise();


// const mysql2 = require ("mysql2")

// const dbconnection = mysql2.createPool({
// user: "Evangadi-addmin",
// database:'evangadi_dbnov',
// host:"localhost",
// password:"123456",
// connectionLimit:10
// })
// // dbconnection.execute ("select 'test' ", (err,result) => {
// //     if (err) {
// //         console.log(err.message);
        
// //     }else{  
// //     console.log(result);
// //     }
// // });

// module.exports = dbconnection.promise()
 

