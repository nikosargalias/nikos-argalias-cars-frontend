import React, { createContext, useState } from 'react';

type filterType = 'make' | 'date';

const FiltersContext = createContext(
    {} as {
        filter: filterType;
        setFilter: (filter: filterType) => void;
    }
);

const FiltersContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [filter, setFilter] = useState('' as filterType);

    return (
        <FiltersContext.Provider value={{ filter, setFilter }}>
            {children}
        </FiltersContext.Provider>
    );
};

export default FiltersContextProvider;
export { FiltersContext };
