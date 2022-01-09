import React, { createContext, useReducer, useEffect, useMemo } from 'react';
import { fetchCars } from '../../utils/fetchCars';
import { InitialState, CarsContextState, DispatchActions } from './cars.types';
import { addCar, initCars, removeCar, setCars } from './carsActions';
import carDataReducer from './carsReducer';
import {
    saveToLocalStorage,
    loadFromLocalStorage,
} from '../../utils/localStorage';
import { fetchPhoneticWord } from '../../utils/fetchPhoneticWords';

const CarsContext = createContext({} as CarsContextState);

const CARS_KEY = 'cars_key';

const InitialStateObj: InitialState = {
    cars: [],
    carsToDisplay: [],
};

const CarContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [{ cars, carsToDisplay }, dispatch] = useReducer(
        carDataReducer,
        InitialStateObj
    );

    useEffect(() => {
        if (carsToDisplay.find((car) => car.phonetic)) return;

        if (carsToDisplay.length > 0) {
            (async () => {
                const carsWithPhoneticWordsPromise = carsToDisplay.map(
                    (car) => {
                        return fetchPhoneticWord(car.Model).then((data) => {
                            return { ...car, phonetic: data[0].word };
                        });
                    }
                );
                const carsWithPhoneticWordsResolved = await Promise.all(
                    carsWithPhoneticWordsPromise
                );
                dispatch(setCars(carsWithPhoneticWordsResolved));
            })();
        }
    }, [carsToDisplay]);

    useEffect(() => {
        const carsFromLocalStorage = loadFromLocalStorage(CARS_KEY);
        if (carsFromLocalStorage) {
            if (carsFromLocalStorage.length) {
                dispatch(initCars(carsFromLocalStorage));
            }
        } else {
            (async () => {
                const cars = await fetchCars();
                dispatch(initCars(cars));
            })();
        }
    }, []);

    useEffect(() => {
        if (cars) {
            saveToLocalStorage(CARS_KEY, cars);
        }
    }, [cars]);

    const actions: DispatchActions = useMemo(
        () => ({
            addCar: (car) => {
                dispatch(addCar(car));
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

    return (
        <CarsContext.Provider value={{ cars, actions, carsToDisplay }}>
            {children}
        </CarsContext.Provider>
    );
};

export default CarContextProvider;
export { CarsContext };
