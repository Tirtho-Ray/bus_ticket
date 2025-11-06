
import { Schema, model } from "mongoose";

import { TRoute } from "./route.interface";


const routeSchema = new Schema<TRoute>({
  origin:{
    type:String,
    required:true
  },
  destination:{
    type:String,
    required:true
  },
  distance:{
    type:Number,
    required:true
  },
}, { timestamps: true });




export const Route = model<TRoute>("Route", routeSchema);
