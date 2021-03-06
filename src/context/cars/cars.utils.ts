import { CarType } from '../../types/CarsType';
import { fetchPhoneticWords } from '../../utils/fetchPhoneticWords';

export const addPhoneticWordsToCars = async (
    cars: CarType[],
    cb: (car: CarType[]) => void
) => {
    (async () => {
        const carsWithPhoneticWordsPromise = cars.map((car) => {
            return fetchPhoneticWords(car.model).then((data) => {
                return {
                    ...car,
                    phonetic: data.map((arr: any) => arr.word).join(' '),
                };
            });
        });
        const carsWithPhoneticWordsResolved = await Promise.all(
            carsWithPhoneticWordsPromise
        );
        cb(carsWithPhoneticWordsResolved);
    })();
};
