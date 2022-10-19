import { View, Text, Button, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import useAuth from '../hooks/useAuth'
import { useNavigation } from '@react-navigation/core'
import tw from 'twrnc'

const Login = () => {

  const { signInWithGoogle } = useAuth()

  const navigation = useNavigation()

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerShown: false
  //   })
  // }, [])

  const { setUser } = useAuth()

  const dummyUser = {
    name: 'Aman Khanna',
    photoURL: 'https://images.unsplash.com/photo-1606122017369-d782bbb78f32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXRzfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
  }

  return (
    <View style={tw`flex-1`}>
      <ImageBackground
        resizeMode='cover'
        style={tw`flex-1`}
        source={{
          uri: 'http://tinder.com/static/tinder.png'
        }}>
        <TouchableOpacity
          onPress={() => { setUser(dummyUser) }}
          style={[tw`absolute bottom-14 w-52 bg-white p-4 rounded-2xl`, {
            marginHorizontal: '25%'
          }]}>
          <Text style={tw`text-center font-semibold`}>Signin & Get Swiping</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}

export default Login