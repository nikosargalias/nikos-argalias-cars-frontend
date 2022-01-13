export const fetchPhoneticWords = async (word: string) => {
    const numOfWords = word.split(' ');
    const maxWords = numOfWords.length * 2;
    const response = await fetch(
        `https://api.datamuse.com/words?sl=${word}&max=${maxWords}`
    );

    const phoneticWords = await response.json();

    return phoneticWords;
};
