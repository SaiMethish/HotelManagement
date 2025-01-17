export class Booking{
    booking_id:number;
    user_id:number;
    hotel_id:number;
    booking_date:Date;
    checkin_date:String;
    checkout_date:String;
    constructor(b_id:number,u_id:number,h_id:number,checkin_date:string,
        checkout_date:string, booking_date:Date ){
        this.booking_id=b_id;
        this.hotel_id=h_id;
        this.user_id=u_id;
        this.booking_date=booking_date;
        this.checkin_date=checkin_date;
        this.checkout_date=checkout_date;
    }
}