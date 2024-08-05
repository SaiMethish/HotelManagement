export class Booking{
    b_id:number;
    u_id:number;
    h_id:number;
    booking_date:Date;
    no_of_rooms:number;
    constructor(b_id:number,u_id:number,h_id:number,booking_date:Date,no_of_rooms:number){
        this.b_id=b_id;
        this.h_id=h_id;
        this.u_id=u_id;
        this.booking_date=booking_date;
        this.no_of_rooms=no_of_rooms;
    }
}