import { User } from "../model/User";
import promptSync from 'prompt-sync';
const prompt=promptSync();
const getUser=()=>{
    const userid:number=parseInt(prompt("enter the user id"));
    const name:string=prompt("enter user name");
    const email:string=prompt("enter email");
    const ph_no:string=prompt("enter ph_no");
    const user:User=new User(userid,name,email,ph_no);
}