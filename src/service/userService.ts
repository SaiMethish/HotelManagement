import { userList } from "..";
import { User } from "../model/User";
import promptSync from 'prompt-sync';
import { logger } from "../Logger/logger";
const prompt=promptSync();
export const createUser=():User=>{
    let userid:number;
    if(userList.length==0) userid=1;
    else userid=userList.length-1;
    const name:string=prompt("enter user name");
    const email:string=prompt("enter email");
    const ph_no:string=prompt("enter ph_no");
    const user:User=new User(userid,name,email,ph_no);
    userList.push(user);
    logger.info("user added");
    return user;
}

export const getUsers=()=>{
    for(let i of userList) console.log(i.toString());
}

export const getUser=(id:number):User=>{
    for(let i of userList){
        if(i.user_id==id) return i;
    }
    logger.error("user not found");
    return new User(-1,"","","");
}


export const deleteUser=(id:number)=>{
    let idx:number=-1;
    for(let i=0;i<userList.length;i++){
        if(userList[i].user_id==id) idx=i;
    }
    userList.splice(idx,1);
    idx==-1?logger.error("user not found"):logger.info("user deleted");
}
