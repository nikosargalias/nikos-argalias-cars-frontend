import { createSelector } from 'reselect';
import { CarType } from '../../types/CarsType';
import { filterState } from '../filters/filters.types';

const cars = (state: CarType[]) => state;
const carId = (state: CarType[], carId: string) => carId;
const filters = (state: CarType[], filters: filterState) => filters;

const selectCarById = createSelector([cars, carId], (cars, carId) => {
    return cars.find((car) => car.id === carId);
});

const selectCarsByFilters = createSelector(
    [cars, filters],
    (cars, { make, sort }) => {
        const draftState: CarType[] = JSON.parse(JSON.stringify(cars));
        const filteredByMakeCars = make
            ? draftState.filter((c) => c.make === make)
            : draftState;

        switch (sort) {
            case 'make':
                return filteredByMakeCars.sort((a: CarType, b: CarType) =>
                    a.make < b.make ? -1 : 1
                );
            case 'date':
                return filteredByMakeCars.sort((a: CarType, b: CarType) =>
                    a.year < b.year ? -1 : 1
                );
            default:
                return filteredByMakeCars;
        }
    }
);

export { selectCarById, selectCarsByFilters };
