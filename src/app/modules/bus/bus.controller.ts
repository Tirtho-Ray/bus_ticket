import httpStatus from 'http-status';
import { catchAsync } from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { BusServices } from './bus.services';
import AppError from '../../errors/appError';


const createBus = catchAsync(async (req, res) => {
  const route = await BusServices.createBusIntoDB(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Bus created successfully',
    data: route,
  });
});


const getAllBuss = catchAsync(async (_req, res) => {
  const routes = await BusServices.getAllBusFromDB();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Bus retrieved successfully',
    data: routes,
  });
});


const getSingleBus = catchAsync(async (req, res) => {
    const { id } = req.params;
if (!id) throw new AppError(httpStatus.NOT_FOUND,"id not found")
  const route = await BusServices.getSingleBusFromDB(id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: route ? 'Bus retrieved successfully' : 'Bus not found',
    data: route,
  });
});


const updateBus = catchAsync(async (req, res) => {
    const { id } = req.params;
if (!id) throw new AppError(httpStatus.NOT_FOUND,"id not found")
  const route = await BusServices.updateBusIntoDB(id, req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: route ? 'Bus updated successfully' : 'Bus not found',
    data: route,
  });
});


const deleteBus = catchAsync(async (req, res) => {
    const { id } = req.params;
if (!id) throw new AppError(httpStatus.NOT_FOUND,"id not found")
  const route = await BusServices.deleteBusFromDB(id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: route ? 'Route deleted successfully' : 'Route not found',
    data: route,
  });
});

export const RouteController = {
 createBus,
 getAllBuss,
 getSingleBus,
 updateBus,
 deleteBus
};
