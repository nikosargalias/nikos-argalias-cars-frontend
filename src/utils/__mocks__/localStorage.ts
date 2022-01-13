export const loadFromLocalStorage = (key: string) => {
    return [
        {
            id: '1',
            year: '2020',
            make: 'Audi',
            model: 'A3',
            colour: '',
            phonetic: 'foo',
        },
        {
            id: '2',
            year: '2020',
            make: 'Mercedes',
            model: 'A200',
            colour: '',
            phonetic: 'foo',
        },
    ];
};

export const saveToLocalStorage = (key: string, value: Object) => {};
