export const fetchPhoneticWords = async (words: string[]) => {
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

export const fetchPhoneticWord = async (word: string) => {
    const maxWords = word.split(' ').length || 1;
    const response = await fetch(
        `https://api.datamuse.com/words?sl=${word}&max=${maxWords}`
    );

    const phoneticWords = await response.json();

    return phoneticWords;
};
