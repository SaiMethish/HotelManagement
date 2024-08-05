export class User{
    user_id:number;
    user_name:string;
    email:string;
    ph_no:string;
    constructor(u_id:number,u_name:string,email:string,ph_no:string){
        this.user_id=u_id;
        this.user_name=u_name;
        this.email=email;
        this.ph_no=ph_no;
    }
}