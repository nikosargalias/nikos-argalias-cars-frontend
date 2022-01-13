export type sort = 'make' | 'date';
export type make = string;

export type filterState = {
    sort: sort;
    make: make;
};

export enum FilterTypes {
    SET_MAKE_FILTER = 'SET_MAKE_FILTER',
    SET_SORT_FILTER = 'SET_SORT_FILTER ',
}

export type actions = {
    setMake: (make: make) => void;
    setSort: (sort: sort) => void;
};

export type filtersAction = {
    type: FilterTypes;
    payload: {
        sort?: sort;
        make?: make;
    };
};
