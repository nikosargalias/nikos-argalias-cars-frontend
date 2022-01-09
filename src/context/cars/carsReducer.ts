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
                    draftState.cars = cars;
                    draftState.carsToDisplay = cars;
                }
                break;
            case CarActionTypes.ADD_CAR:
                if (car) {
                    draftState.carsToDisplay = [
                        car,
                        ...draftState.carsToDisplay,
                    ];
                }
                break;
            case CarActionTypes.REMOVE_CAR:
                if (id) {
                    draftState.carsToDisplay = draftState.carsToDisplay.filter(
                        (car) => car.objectId !== id
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
