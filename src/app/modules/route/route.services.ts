import { TRoute } from './route.interface';
import { Route } from './route.model';
import mongoose from 'mongoose';

const createRouteIntoDB = async (payload: TRoute) => {
  const route = await Route.create(payload);
  return route;
};

const getAllRoutesFromDB = async () => {
  const routes = await Route.find().sort({ createdAt: -1 });
  return routes;
};

const getSingleRouteFromDB = async (id: string) => {
  if (!mongoose.Types.ObjectId.isValid(id)) throw new Error('Invalid route ID');
  const route = await Route.findById(id);
  return route;
};

const updateRouteIntoDB = async (id: string, payload: Partial<TRoute>) => {
  if (!mongoose.Types.ObjectId.isValid(id)) throw new Error('Invalid route ID');
  const updated = await Route.findByIdAndUpdate(id, payload, { new: true });
  return updated;
};

const deleteRouteFromDB = async (id: string) => {
  if (!mongoose.Types.ObjectId.isValid(id)) throw new Error('Invalid route ID');
  const deleted = await Route.findByIdAndDelete(id);
  return deleted;
};

export const RouteServices = {
  createRouteIntoDB,
  getAllRoutesFromDB,
  getSingleRouteFromDB,
  updateRouteIntoDB,
  deleteRouteFromDB,
};
