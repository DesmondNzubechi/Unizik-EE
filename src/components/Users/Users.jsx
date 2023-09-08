import React, { useState } from "react";


const usersInfo = [
    {
        Name: 'Desmond ',
        email: 'Nzubechukwu@gmail.com',
        level: '100',
    },
    {
        Name: 'Nzubechukwu Abugu',
        email: 'Nzubechukwuabugu@gmail.com',
        level: '300',
    },
    {
        Name: 'Elvis onunwa',
        email: 'elvisio@gmail.com',
        level: '400',
    },
    {
        Name: 'Nzubechukwu Abugu',
        email: 'Nzubechukwuabugu@gmail.com',
        level: '300',
    },
    {
        Name: 'Nzubechukwu Abugu',
        email: 'men@gmail.com',
        level: '500',
    }

]


export const Users = () => {

     const [searchUser, setSearchedUser] = useState([]);
    console.log(searchUser);

    return(
        <div className="justify-center flex">
            <div className="md:ml-2 ml-[150px]">
                <p className=" text-[15px] md:my-[25px] font-bold uppercase text-[20px] ">Registered  users</p>
                <div>
                    <input onChange={(e) => {
                        const value = e.target.value;
                        const findUser = usersInfo.filter(user => {
                            return  user.Name.toLocaleLowerCase().includes(value.toLocaleLowerCase()) || user.email.toLocaleLowerCase().includes(value.toLocaleLowerCase()) || user.level.toLocaleLowerCase().includes(value.toLocaleLowerCase());
                        });
                        setSearchedUser(findUser);
                    }} type="text" placeholder="Search for a user" className="border-2 outline-0  px-[20px] rounded  " name="" id="" />
                </div>
          <table class="border-separate relative  overflow-x-scroll   border-spacing-2  shadow-2xl ...">
           <thead  className=" ">
            <tr className="">
                <th class="border  md:text-[25px] text-[10px] py-1 px-2 uppercase border-slate-500 ...">Full Name</th>
                <th class="border md:text-[25px] text-[10px] py-1 px-2 uppercase border-slate-500 ...">Email Address</th>
                <th class="border md:text-[25px] text-[10px] py-1 px-2 uppercase border-slate-500 ...">Level</th>
            </tr>
           </thead>
           <tbody className=" overflow-x-auto ">
         { 
searchUser.length !== 0 &&     searchUser.map(user => {
    return <tr className="">
        <td class=" border border-slate-100 ... text-[10px] md:text-[14px] text-slate-500 py-1 px-2 ">{user.Name}

       </td>
        <td class=" border border-slate-100 ... text-[10px] md:text-[14px]  text-slate-500 py-1 px-2 ">{user.email}</td>
        <td class=" border border-slate-100 ... text-[10px] md:text-[14px]  text-slate-500 py-1 px-2 ">{user.level}  
        </td>
      
        <td class=" text-[10px]  md:text-[14px]  text-slate-500 py-1 px-2 ">
        <button className="bg-green-500  px-2 text-[7px] md:text-[13px]   font-semibold rounded-[2px] py-1 text-slate-50">Make Admin</button>
        
        </td>
        <td class=" text-[10px] md:text-[14px]  text-slate-500 py-1 px-2 ">
        <button className="bg-red-500 px-2 text-[7px] md:text-[13px]   font-semibold rounded-[2px] py-1 text-slate-50">Disable Account</button>
        </td>
       {/* <button className="bg-red-500 px-2 text-[10px] md:text-[17px]   font-semibold rounded-[2px] py-1 text-slate-50">Remove As Admin</button>*/}   
    </tr>
    
})
}
{
           searchUser.length == 0 &&     usersInfo.map(user => {
                    return <tr className="">
                        <td class=" border border-slate-100 ... text-[10px] md:text-[14px] text-slate-500 py-1 px-2 ">{user.Name}

                       </td>
                        <td class=" border border-slate-100 ... text-[10px] md:text-[14px]  text-slate-500 py-1 px-2 ">{user.email}</td>
                        <td class=" border border-slate-100 ... text-[10px] md:text-[14px]  text-slate-500 py-1 px-2 ">{user.level} 
                        </td>
                      
                        <td class=" text-[10px]  md:text-[14px]  text-slate-500 py-1 px-2 ">
                        <button className="bg-green-500  px-2 text-[7px] md:text-[13px]   font-semibold rounded-[2px] py-1 text-slate-50">Make Admin</button>
                        
                        </td>
                        <td class=" text-[10px] md:text-[14px]  text-slate-500 py-1 px-2 ">
                        <button className="bg-red-500 px-2 text-[7px] md:text-[13px]   font-semibold rounded-[2px] py-1 text-slate-50">Disable Account</button>
                        </td>
                       {/* <button className="bg-red-500 px-2 text-[10px] md:text-[17px]   font-semibold rounded-[2px] py-1 text-slate-50">Remove As Admin</button>*/}   
                    </tr>
                    
                })
          }
           </tbody>
          </table>
          </div>
        </div>
    )
}