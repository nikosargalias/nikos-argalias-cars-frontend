export const fetchCars = async (searchQuery?: string) => {
    const carMake: string = searchQuery ? `_${searchQuery}` : '';

    const response = await fetch(
        `https://parseapi.back4app.com/classes/Car_Model_List${carMake}?limit=20`,
        {
            headers: {
                'X-Parse-Application-Id':
                    'hlhoNKjOvEhqzcVAJ1lxjicJLZNVv36GdbboZj3Z', // This is the fake app's application id
                'X-Parse-Master-Key':
                    'SNMJJF0CZZhTPhLDIqGhTlUNV9r60M2Z5spyWfXW', // This is the fake app's readonly master key
            },
        }
    );
    const data = await response.json(); // Here you have the data that you need
    return data.results;
};
