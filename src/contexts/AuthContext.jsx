'use client';
import { createContext, useState } from "react"

export const Create = createContext({})

export default function AuthProvider({children}) {
    const [user, setUser] = useState({teste: "foi"})

    return <Create.Provider value={{user, setUser}}>{children}</Create.Provider>
}

