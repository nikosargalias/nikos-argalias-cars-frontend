import { createSelector } from 'reselect';
import { CarType } from '../../types/CarsType';

const cars = (state: CarType[]) => state;
const sort = (state: CarType[], sort: 'make' | 'date') => sort;

const selectCarsBySorting = createSelector([cars, sort], (cars, sort) => {
    const draftState: CarType[] = JSON.parse(JSON.stringify(cars));

    switch (sort) {
        case 'make':
            return draftState.sort((a: CarType, b: CarType) =>
                a.Make < b.Make ? -1 : 1
            );
        case 'date':
            return draftState.sort((a: CarType, b: CarType) =>
                a.Year < b.Year ? -1 : 1
            );
    }
});

const selectCarModels = createSelector(cars, (cars: CarType[]) => {
    return cars.map((car) => car.Model);
});

export { selectCarsBySorting, selectCarModels };
