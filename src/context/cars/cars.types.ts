import { CarType } from '../../types/CarsType';

export type InitialState = {
    cars: CarType[];
    carsToDisplay: CarType[];
};

export enum CarActionTypes {
    ADD_CAR = 'ADD_CAR',
    REMOVE_CAR = 'REMOVE_CAR',
    INIT_CARS = 'INIT_CARS',
    SET_CARS_TO_DISPLAY = 'SET_CARS_TO_DISPLAY',
}

export type CarAction = {
    type: CarActionTypes;
    payload: {
        car?: CarType;
        cars?: CarType[];
        id?: string;
    };
};

export type DispatchActions = {
    addCar: (car: CarType) => void;
    setCars: (cars: CarType[]) => void;
    initCars: (cars: CarType[]) => void;
    removeCar: (id: string) => void;
};

export type CarsContextState = {
    cars: CarType[];
    actions: DispatchActions;
    carsToDisplay: CarType[];
};
