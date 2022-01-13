export const carMakeRegex = /^[a-zA-Z]+$/;
export const carModelRegex = /^[A-Za-z0-9]*$/;
export const carColourRegex = /[a-zA-Z]*\s?[a-zA-Z]*/;

export const carRegexValidation = (inputValue: string, reg: RegExp) =>
    reg.test(inputValue);
