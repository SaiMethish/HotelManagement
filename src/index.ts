import { Hotel } from "./model/Hotel";

export const hotelsList:Hotel[]=[];

for(let i:number=1;i<=20;i++){
    let h:Hotel=new Hotel(i,`h${i}`,`address${i}`);
    hotelsList.push(h);
}


