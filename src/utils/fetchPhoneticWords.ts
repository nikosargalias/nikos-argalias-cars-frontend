const fetchPhoneticWords = async (words: string[]) => {
    const PhoneticCarWords = words.map((word) => {
        return fetch(`https://api.datamuse.com/words?sl=${word}&max=1`)
            .then((response) => response.json())
            .then((word) => word)
            .catch((e) => {
                // handle error
            });
    });

    return PhoneticCarWords;
};

export default fetchPhoneticWords;
