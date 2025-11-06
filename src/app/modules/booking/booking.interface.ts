import { Types } from "mongoose";

export type TBooking = {
  userId: Types.ObjectId;
  busId: Types.ObjectId;
  seatsBooked: number[];
  journeyDate: Date;
  totalFare: number;
  paymentId: Types.ObjectId;
  status: "pending" | "confirmed" | "canceled";
};


// Fields: 
// { 
// "_id": "ObjectId", 
// "userId": "ObjectId (ref: User)", 
// "busId": "ObjectId (ref: Bus)", 
// "seatsBooked": [5, 6, 7], 
// "journeyDate": "2025-10-15", 
// "totalFare": 3600, 
// "paymentId": "ObjectId (ref: Payment)", 
// "status": "confirmed" 
// } 
