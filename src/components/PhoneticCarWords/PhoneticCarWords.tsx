import React, { useContext, useEffect, useMemo, useState } from 'react';
import { CarsContext } from '../../context/cars/carsContext';
import { selectCarModels } from '../../context/cars/carsSelectors';
import fetchPhoneticWords from '../../utils/fetchPhoneticWords';
import PhoneticList from './PhoneticCarWords.styled';

import { v4 as uuidv4 } from 'uuid';

const PhoneticCarWords = () => {
    const { carsToDisplay } = useContext(CarsContext);
    const [phoneticWords, setPhonetiWords] = useState([] as JSX.Element[]);

    const words = useMemo(
        () => selectCarModels(carsToDisplay),
        [carsToDisplay]
    );

    useEffect(() => {
        (async () => {
            const phoneticWordsPromises = await fetchPhoneticWords(words);
            Promise.all(phoneticWordsPromises)
                .then((values) => {
                    const words = values.map((value) => (
                        <li key={uuidv4()}>{value[0].word}</li>
                    ));

                    setPhonetiWords(words);
                })
                .catch((e) => {
                    // handle error
                });
        })();
    }, [words]);

    return (
        <PhoneticList>
            <h3>Phonetic words related to selected car models</h3>
            <ul>{phoneticWords}</ul>
        </PhoneticList>
    );
};

export default PhoneticCarWords;
