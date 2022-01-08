import { CarType } from '../../types/CarsType';

const selectCarsBySorting = (state: CarType[], sort: 'make' | 'date') => {
    switch (sort) {
        case 'make':
            return state.sort((a: CarType, b: CarType) =>
                a.Make < b.Make ? -1 : 1
            );
        case 'date':
            return state.sort((a: CarType, b: CarType) =>
                a.Year < b.Year ? -1 : 1
            );
    }
};

const selectCarModels = (cars: CarType[]) => {
    return cars.map((car) => car.Model);
};
export { selectCarsBySorting, selectCarModels };
