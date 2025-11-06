import httpStatus from 'http-status';
import { catchAsync } from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { RouteServices } from './route.services';
import AppError from '../../errors/appError';


const createRoute = catchAsync(async (req, res) => {
  const route = await RouteServices.createRouteIntoDB(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Route created successfully',
    data: route,
  });
});


const getAllRoutes = catchAsync(async (_req, res) => {
  const routes = await RouteServices.getAllRoutesFromDB();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Routes retrieved successfully',
    data: routes,
  });
});


const getSingleRoute = catchAsync(async (req, res) => {
    const { id } = req.params;
if (!id) throw new AppError(httpStatus.NOT_FOUND,"id not found")
  const route = await RouteServices.getSingleRouteFromDB(id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: route ? 'Route retrieved successfully' : 'Route not found',
    data: route,
  });
});


const updateRoute = catchAsync(async (req, res) => {
    const { id } = req.params;
if (!id) throw new AppError(httpStatus.NOT_FOUND,"id not found")
  const route = await RouteServices.updateRouteIntoDB(id, req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: route ? 'Route updated successfully' : 'Route not found',
    data: route,
  });
});


const deleteRoute = catchAsync(async (req, res) => {
    const { id } = req.params;
if (!id) throw new AppError(httpStatus.NOT_FOUND,"id not found")
  const route = await RouteServices.deleteRouteFromDB(id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: route ? 'Route deleted successfully' : 'Route not found',
    data: route,
  });
});

export const RouteController = {
  createRoute,
  getAllRoutes,
  getSingleRoute,
  updateRoute,
  deleteRoute,
};
