import { FilterTypes, make, sort } from './filters.types';

export const setMake = (make: make) => ({
    type: FilterTypes.SET_MAKE_FILTER,
    payload: { make },
});

export const setSort = (sort: sort) => ({
    type: FilterTypes.SET_SORT_FILTER,
    payload: { sort },
});
