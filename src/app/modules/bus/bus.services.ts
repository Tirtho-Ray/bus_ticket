import { TBus } from './bus.interface';
import { Bus } from './bus.model';
import mongoose from 'mongoose';

const createBusIntoDB = async (payload: TBus) => {
  const bus = await Bus.create(payload);
  return bus;
};

const getAllBusFromDB = async () => {
  const bus = await Bus.find().sort({ createdAt: -1 });
  return bus;
};

const getSingleBusFromDB = async (id: string) => {
  if (!mongoose.Types.ObjectId.isValid(id)) throw new Error('Invalid route ID');
  const bus = await Bus.findById(id);
  return Bus;
};

const updateBusIntoDB = async (id: string, payload: Partial<TBus>) => {
  if (!mongoose.Types.ObjectId.isValid(id)) throw new Error('Invalid bus ID');
  const updated = await Bus.findByIdAndUpdate(id, payload, { new: true });
  return updated;
};

const deleteBusFromDB = async (id: string) => {
  if (!mongoose.Types.ObjectId.isValid(id)) throw new Error('Invalid bus ID');
  const deleted = await Bus.findByIdAndDelete(id);
  return deleted;
};

export const BusServices = {
  createBusIntoDB,
  getAllBusFromDB,
  getSingleBusFromDB,
  updateBusIntoDB,
  deleteBusFromDB,
};
