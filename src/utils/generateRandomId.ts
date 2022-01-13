import { v4 as uuidv4 } from 'uuid';

const sessionIds: string[] = [];

export const generateRandomId = (): string => {
    const randomId = uuidv4();
    if (!sessionIds.includes(randomId)) {
        sessionIds.push(randomId);
        return randomId;
    } else {
        return generateRandomId();
    }
};
