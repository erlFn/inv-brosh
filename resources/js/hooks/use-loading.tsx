import React, { createContext, useContext, useState } from "react";

interface LoadingContextType {
    isLoading: boolean;
    setIsLoading: (value: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

interface LoadingProviderProps {
    children: React.ReactNode;
}

export function LoadingProvider({ children }: LoadingProviderProps) {
    const [ isLoading, setIsLoading ] = useState(false);

    return (
        <LoadingContext.Provider
            value={{  isLoading, setIsLoading }}
        >
            {children}
        </LoadingContext.Provider>
    );
}

export function useLoading() {
    const context = useContext(LoadingContext);

    if (context === undefined) {
        throw new Error("useHookForm must be used within a LoadingProvider");
    }

    return context;
}