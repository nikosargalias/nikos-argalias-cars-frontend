import { InitialState, CarActionTypes, CarAction } from './cars.types';
import produce from 'immer';

const carDataReducer = produce(
    (
        draftState: InitialState,
        { type, payload: { cars, car, id } }: CarAction
    ) => {
        switch (type) {
            case CarActionTypes.INIT_CARS:
                if (Array.isArray(cars)) {
                    draftState.cachedCars = cars;
                    draftState.carsToDisplay = cars;
                }
                break;
            case CarActionTypes.ADD_CAR:
                if (car) {
                    draftState.carsToDisplay = [
                        car,
                        ...draftState.carsToDisplay,
                    ];
                    draftState.cachedCars = [car, ...draftState.cachedCars];
                }
                break;
            case CarActionTypes.EDIT_CAR:
                if (car) {
                    draftState.carsToDisplay = draftState.carsToDisplay.map(
                        (c) => {
                            return c.id !== car.id ? c : car;
                        }
                    );
                    draftState.cachedCars = draftState.cachedCars.map((c) => {
                        return c.id !== car.id ? c : car;
                    });
                }
                break;
            case CarActionTypes.REMOVE_CAR:
                if (id) {
                    draftState.carsToDisplay = draftState.carsToDisplay.filter(
                        (car) => car.id !== id
                    );
                }
                break;
            case CarActionTypes.SET_CARS_TO_DISPLAY:
                if (cars) {
                    draftState.carsToDisplay = cars;
                }
                break;
            default:
                break;
        }
    }
);

export default carDataReducer;
