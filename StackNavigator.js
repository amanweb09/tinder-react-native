import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './screens/Home'
import Chat from './screens/Chat'
import Login from './screens/Login'
import useAuth from './hooks/useAuth'

const Stack = createNativeStackNavigator()

const StackNavigator = () => {

    const { user } = useAuth()

    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            {
                user ?
                    <>
                        <Stack.Screen name='Home' component={Home} />
                        <Stack.Screen name='Chat' component={Chat} />
                    </>
                    :
                    <Stack.Screen name='Login' component={Login} options={{
                        headerShown: false
                    }} />
            }
        </Stack.Navigator>
    )
}

export default StackNavigator