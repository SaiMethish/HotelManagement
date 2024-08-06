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
    toString():string{
        return `user_id: ${this.user_id} user_name: ${this.user_name} email: ${this.email}
        ph_no: ${this.ph_no}`;
    }
}