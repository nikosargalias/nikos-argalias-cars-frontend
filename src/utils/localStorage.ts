export const saveToLocalStorage = (key: string, value: Object) => {
    const stringified = JSON.stringify(value);
    if (stringified) {
        localStorage.setItem(key, stringified);
    }
};

export const loadFromLocalStorage = (key: string) => {
    const data = localStorage.getItem(key);
    if (data) {
        return JSON.parse(data);
    }
};
