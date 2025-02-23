// import React from 'react'
// import {
//     Text,
//     View,
//   } from 'react-native';

// function Welcome() {
//   return (
//     <View>
//         <Text>Welcome</Text>
//     </View>
//   )
// }

// export default Welcome

import React from 'react';

import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import tw from 'twrnc'
import LinearGradient from 'react-native-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Animated,{FadeIn, FadeInDown, FadeOut} from 'react-native-reanimated';


function Welcome({navigation}){
  return (    
       
    <View style={tw`flex-1 flex justify-end`}>
        {/* Transparent StatusBar for Fullscreen Background */}
        <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
        {/* Background Image */}
        <Image style={tw`h-full w-full absolute`} source={require('../assets/images/welcome.png')}/>

        {/* Gradient Overlay at Bottom */}
        <LinearGradient
            colors={["transparent", "#18181b"]}  // Adjust colors as needed
            style={[tw`flex justify-end pb-12 `, { width: wp(100), height: hp(70) }]} 
            start={{x:0.5, y:0}}
            end={{x:0.5, y:1}}
                >

        {/* heading Name */}
        <Animated.View entering={FadeInDown.delay(100).springify()} style={tw`flex items-center`}>
            <Text style={[tw`text-white`,{fontSize:hp(5)}]} >
            Best <Text style={tw`text-rose-500 font-bold tracking-wide`}>Workouts</Text>
            </Text>
            <Text style={[tw`text-white font-bold tracking-wide mt-[-5px]`,{fontSize:hp(5)}]} >
            For you....
            </Text>
        </Animated.View>

        {/* Button */}
        <Animated.View entering={FadeInDown.delay(200).springify()} style={tw`mt-6`}>
            <TouchableOpacity style={[tw`bg-rose-500 flex items-center justify-center mx-auto rounded-full border-[2px] border-neutral-200`,{height:hp(7), width:wp(80)}]} onPress={() => navigation.navigate('Home')}>
            <Text style={[tw`text-white font-bold tracking-widest`,{fontSize:hp(3)}]}>
                Get Started
            </Text>
            </TouchableOpacity>
        </Animated.View>
        </LinearGradient>
    </View>     
    
  )
}

export default Welcome;
