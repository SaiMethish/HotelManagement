export class User{
    u_id:number;
    u_name:string;
    email:string;
    ph_no:string;
    constructor(u_id:number,u_name:string,email:string,ph_no:string){
        this.u_id=u_id;
        this.u_name=u_name;
        this.email=email;
        this.ph_no=ph_no;
    }
}