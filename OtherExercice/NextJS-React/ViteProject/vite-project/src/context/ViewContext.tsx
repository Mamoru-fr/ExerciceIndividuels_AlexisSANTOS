import React, { createContext, useContext } from 'react';

type ViewContextValue = {
    view: number
    setView: React.Dispatch<React.SetStateAction<number>>
}

const ViewContext = createContext<ViewContextValue | undefined>(undefined)

export const ViewProvider = ViewContext.Provider

export function useView() {
    const ctx = useContext(ViewContext)
    if (!ctx) throw new Error('useView must be used within a ViewProvider')
    return ctx
}