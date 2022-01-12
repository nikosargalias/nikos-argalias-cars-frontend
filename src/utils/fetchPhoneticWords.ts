export const fetchPhoneticWords = async (word: string) => {
    const maxWords = word.split(' ').length || 1;
    const response = await fetch(
        `https://api.datamuse.com/words?sl=${word}&max=${maxWords}`
    );

    const phoneticWords = await response.json();

    return phoneticWords;
};
