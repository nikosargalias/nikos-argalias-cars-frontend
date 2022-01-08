import { InitialState, CarActionTypes, CarAction } from './cars.types';

const carDataReducer = (
    state: InitialState,
    { type, payload: { cars, car, id } }: CarAction
) => {
    switch (type) {
        case CarActionTypes.INIT_CARS:
            if (Array.isArray(cars)) {
                return {
                    cars: cars,
                    carsToDisplay: cars,
                };
            } else {
                return state;
            }

        case CarActionTypes.ADD_CAR:
            if (car) {
                return {
                    ...state,
                    carsToDisplay: [car, ...state.carsToDisplay],
                };
            } else {
                return state;
            }
        case CarActionTypes.REMOVE_CAR:
            if (id) {
                return {
                    ...state,
                    carsToDisplay: state.carsToDisplay.filter(
                        (car) => car.objectId !== id
                    ),
                };
            } else {
                return state;
            }
        case CarActionTypes.SET_CARS_TO_DISPLAY:
            if (cars) {
                return {
                    ...state,
                    carsToDisplay: cars,
                };
            } else {
                return state;
            }
        default:
            return state;
    }
};

export default carDataReducer;
