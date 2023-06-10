import { createContext, useContext, useState } from 'react';

const StateContext = createContext();


export const ContextProvider = ({children}) => {

    const [selectedCategory, setSelectedCategory] = useState("New");
    const [videos, setVideos] = useState([]);

    const handleSelectedCategory = (category) => {

        setSelectedCategory(category);

    }

    return (
        <StateContext.Provider
            value={{
                selectedCategory,
                handleSelectedCategory,
                videos,
                setVideos
            }}
        >
            {children}
        </StateContext.Provider>
    )

} 

// eslint-disable-next-line react-refresh/only-export-components
export const useStateContext = () => useContext(StateContext);