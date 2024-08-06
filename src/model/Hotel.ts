export class Hotel{
    public hotel_id:number;
    public name:string;
    public rooms:number;
    public address:string;
    constructor(h_id:number,name:string,address:string){
        this.hotel_id=h_id;
        this.name=name;
        this.address=address;
        this.rooms=20;
    }
    toString():string{
        return `hotel id: ${this.hotel_id} hotel name: ${this.name} total rooms: ${this.rooms} hotel address:${this.address}`;
    }
}
