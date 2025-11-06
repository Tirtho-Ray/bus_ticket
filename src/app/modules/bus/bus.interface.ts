import { Types } from "mongoose";

export type  TBus ={
    busName:string;
    route:Types.ObjectId;
    busNumber:number;
    totalSeats:number;
    availableSeats:number;
    fare:number;
    departureTime:string;
    arrivalTime:string;

}

// Fields: 
// { 
// "_id": "ObjectId", 
// "busName": "Green Line Express", 
// "busNumber": "GLX-102", 
// "route": "ObjectId (ref: Route)", 
// "totalSeats": 40, 
// "availableSeats": 40, 
// "fare": 1200, 
// "departureTime": "10:00 AM", 
// "arrivalTime": "4:00 PM" 
// } 