import {createContext, useState} from  'react';

const AppContext = createContext();

export const AppProvider = ({children}) => {

    const [isLoading, setIsLoading] = useState(false);

    return <AppContext.Provider value={{isLoading, setIsLoading}}>
        {children}
    </AppContext.Provider>
}

export default AppContext;
