import React, { createContext, useContext, useState } from 'react'
import * as Google from 'expo-google-app-auth'

const AuthContext = createContext({})

const config = {
    iosClientId: '738713038137-kcogae8nt6vh2idd4ori181pc2fqi6ju.apps.googleusercontent.com',
    androidClientId: '738713038137-tscpa0806ar1qgd0eqbioe2kgn52mft9.apps.googleusercontent.com',
    scopes: ['profile', 'email'],
    permissions: ['public_profile', 'email', 'gender', 'location']
}

const signInWithGoogle = async () => {
    await Google.logInAsync(config).then((loginResult) => {
        if(loginResult.type === 'success') {
            //...login
        }

    }).catch((err) => {
        console.log(err);
    })
}

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    return (
        <AuthContext.Provider value={{ user, setUser, signInWithGoogle }}>
            {children}
        </AuthContext.Provider>
    )
}

export default function useAuth() {
    return useContext(AuthContext)
}