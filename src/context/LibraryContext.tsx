import { ReactNode } from "react";
import { createContext } from "vm";

export const LibraryContext = createContext<>({})

const LibraryProvider = ({ children }: { children: ReactNode }) => {
    return (
        <LibraryContext.Provider value ={}> {children} </LibraryContext.Provider>
    );
};

export default LibraryProvider;