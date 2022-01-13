import produce from 'immer';
import { filtersAction, filterState, FilterTypes } from './filters.types';

const filterReducer = produce(
    (
        draftState: filterState,
        { type, payload: { sort, make } }: filtersAction
    ) => {
        switch (type) {
            case FilterTypes.SET_MAKE_FILTER:
                if (typeof make === 'string') {
                    draftState.make = make;
                }
                break;
            case FilterTypes.SET_SORT_FILTER:
                if (sort) {
                    return { ...draftState, sort: sort };
                    // draftState.sort = sort;
                }
                break;
        }
    }
);

export default filterReducer;
