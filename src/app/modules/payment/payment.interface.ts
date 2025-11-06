import { Types } from "mongoose"

export type TPayment ={
    userId : Types.ObjectId;
    bookingId : Types.ObjectId;
    amount:number;
    method:"Mobile_Banking" | "Bank" | "stripe";
    transactionId:string;
    paymentStatus:"success"|"pending"|"canceled";
    paymentDate:Date;
}