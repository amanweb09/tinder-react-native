import { View, Text, Button, SafeAreaView, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { useNavigation } from '@react-navigation/core'
import useAuth from '../hooks/useAuth'
import tw from 'twrnc'
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons'
import dummyUsers from '../dummy.json'
import Swiper from 'react-native-deck-swiper'

const Home = () => {

    const navigation = useNavigation()

    const { user, setUser } = useAuth()

    const swipeRef = useRef(null)

    useEffect(() => {
        
    }, [])

    return (
        <SafeAreaView style={tw`flex-1`}>

            {/* Header */}
            <View style={tw`flex-row px-5 justify-between items-center relative`}>
                <TouchableOpacity onPress={() => { setUser(null) }}>
                    <Image style={tw`rounded-full h-10 w-10`} source={{ uri: user.photoURL }} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image
                        style={tw`h-14 w-14`}
                        source={require('../assets/tinder.png')} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
                    <Ionicons
                        name='chatbubbles-sharp'
                        size={30}
                        color='#ff5864' />
                </TouchableOpacity>
            </View>

            <View style={tw`flex-1 mt-6`}>
                <Swiper
                    ref={swipeRef}
                    containerStyle={{ backgroundColor: 'transparent' }}
                    stackSize={5}
                    cardIndex={0}
                    animateCardOpacity
                    infinite
                    verticalSwipe={false}
                    cards={dummyUsers}
                    overlayLabels={{
                        left: {
                            title: 'NOPE',
                            style: {
                                label: {
                                    textAlign: 'right',
                                    color: '#ff0000'
                                }
                            }
                        },
                        right: {
                            title: 'MATCH',
                            style: {
                                label: {
                                    color: '#4ded30'
                                }
                            }
                        }
                    }}
                    onSwipedLeft={() => { console.log('pass') }}
                    onSwipedRight={() => { console.log('match') }}
                    renderCard={(card) => {
                        return (
                            <View
                                key={Math.random()}
                                style={tw`bg-white h-3/4 rounded-xl relative`}>
                                <Image
                                    style={tw`h-full w-full rounded-xl absolute top-0`}
                                    source={{ uri: card.photoURL }} />

                                <View style={[tw`bg-white w-full h-20 absolute bottom-0 justify-between items-center flex-row px-6 py-2 rounded-b-lg`, styles.cardShadow]}>
                                    <View>
                                        <Text style={tw`font-bold text-xl`}>{card.firstName} {card.lastName}</Text>
                                        <Text>{card.occupation}</Text>
                                    </View>
                                    <Text style={tw`text-2xl font-bold`}>{card.age}</Text>
                                </View>
                            </View>
                        )
                    }} />
            </View>

            <View style={tw`flex flex-row justify-evenly my-2`}>

                <TouchableOpacity
                    onPress={() => { swipeRef.current.swipeLeft() }}
                    style={tw`items-center justify-center rounded-full w-16 h-16 bg-red-200`}>
                    <Entypo name='cross' size={24} color={'red'} />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => { swipeRef.current.swipeRight() }}
                    style={tw`items-center justify-center rounded-full w-16 h-16 bg-green-200`}>
                    <AntDesign name='heart' size={24} color={'green'} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    cardShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2
    }
})

export default Home