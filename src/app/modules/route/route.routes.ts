import express from 'express';
import { RouteController } from './route.controller';

const router = express.Router();

router.post('/', RouteController.createRoute);           
router.get('/', RouteController.getAllRoutes);      
router.get('/:id', RouteController.getSingleRoute);      
router.patch('/:id', RouteController.updateRoute);  
router.delete('/:id', RouteController.deleteRoute);    

export const RouteRoutes = router;
