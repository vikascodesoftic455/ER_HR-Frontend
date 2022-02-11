 import React, { useEffect, useState } from 'react'


 const DataTable =()=>{
      const [user,setUser]=useState([])
      
      const fetchUserData =()=>{
         fetch("https://jsonplaceholder.typicode.com/users")
       .then((res)=>res.json())
       .then((json)=>{
           setUser(json)
       })
    }


   useEffect(()=>{  
       fetchUserData()
   },[])

   return(
       <React.Fragment>
          <table className="table">
           <thead>
               <tr>
               <th scope="col">Id</th>
               <th scope="col">Name</th>
               <th scope="col">email</th>
               <th scope="col">active</th>
               </tr>
           </thead>
           <tbody>
                  {
                    user.map((data,index)=>{
                         return(
                             <tr>
                                    <td scope="row">{index+1}</td>
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td>{data.username}</td>
                             </tr>
                         )
                                 
                    })
                  }
           </tbody>
           </table>
       </React.Fragment>
   )
 }


 export default DataTable
