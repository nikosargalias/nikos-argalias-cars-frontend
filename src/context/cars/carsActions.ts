import { CarActionTypes } from './cars.types';
import { CarType } from '../../types/CarsType';

export const addCar = (car: CarType) => ({
    type: CarActionTypes.ADD_CAR,
    payload: { car },
});

export const initCars = (cars: CarType[]) => ({
    type: CarActionTypes.INIT_CARS,
    payload: { cars },
});

export const setCars = (cars: CarType[]) => ({
    type: CarActionTypes.SET_CARS_TO_DISPLAY,
    payload: { cars },
});

export const removeCar = (id: string) => ({
    type: CarActionTypes.REMOVE_CAR,
    payload: { id },
});
