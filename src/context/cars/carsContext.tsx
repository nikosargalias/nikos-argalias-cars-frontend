import React, { createContext, useReducer, useEffect, useMemo } from 'react';
import { InitialState, CarsContextState, DispatchActions } from './cars.types';
import { addCar, editCar, initCars, removeCar, setCars } from './carsActions';
import carDataReducer from './carsReducer';
import {
    saveToLocalStorage,
    loadFromLocalStorage,
} from '../../utils/localStorage';
import { addPhoneticWordsToCars } from './cars.utils';

const CarsContext = createContext({} as CarsContextState);

const CARS_KEY = 'cars_key';

const InitialStateObj: InitialState = {
    cachedCars: [],
    carsToDisplay: [],
};

const CarContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [{ cachedCars, carsToDisplay }, dispatch] = useReducer(
        carDataReducer,
        InitialStateObj
    );

    const actions: DispatchActions = useMemo(
        () => ({
            addCar: (car) => {
                dispatch(addCar(car));
            },
            editCar: (car) => {
                dispatch(editCar(car));
            },
            setCars: (cars) => {
                dispatch(setCars(cars));
            },
            removeCar: (id) => {
                dispatch(removeCar(id));
            },
            initCars: (id) => {
                dispatch(initCars(id));
            },
        }),
        []
    );

    // The purpose for fetching the phonetic words in the the useEffect here is so that the cars can render immediately as soon as they come back fgrom the API. following that, we fetch the phonetic words and update the context when they are fetched, triggering a rerender. This makes for the most performant initial render time.
    useEffect(() => {
        // if phonetic words have already been addded or cars array is empty return
        if (
            carsToDisplay.find((car) => car.phonetic) ||
            carsToDisplay.length === 0
        )
            return;

        addPhoneticWordsToCars(carsToDisplay, (cars) => actions.setCars(cars));
    }, [carsToDisplay, actions]);

    useEffect(() => {
        // if phonetic words have already been addded or cars array is empty return
        if (cachedCars.find((car) => car.phonetic) || cachedCars.length === 0)
            return;

        addPhoneticWordsToCars(cachedCars, (cars) => actions.initCars(cars));
    }, [cachedCars, actions]);

    useEffect(() => {
        const carsFromLocalStorage = loadFromLocalStorage(CARS_KEY);
        if (carsFromLocalStorage) {
            if (carsFromLocalStorage.length) {
                actions.initCars(carsFromLocalStorage);
            }
        }
    }, [actions]);

    useEffect(() => {
        if (cachedCars) {
            saveToLocalStorage(CARS_KEY, cachedCars);
        }
    }, [cachedCars, actions]);

    return (
        <CarsContext.Provider value={{ cachedCars, actions, carsToDisplay }}>
            {children}
        </CarsContext.Provider>
    );
};

export default CarContextProvider;
export { CarsContext };
