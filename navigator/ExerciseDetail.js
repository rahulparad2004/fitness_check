import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import tw from 'twrnc'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Animated, { FadeInDown } from 'react-native-reanimated';


export default function ExerciseDetail ({route}){
    const { item } = route.params;
    console.log('Got info: ', item);
    
    return (
      <View style={tw`flex flex-1`}>
        <View style={tw`bg-neutral-200 rounded-b-[40px]`}>
          <Image
            source={{uri: item.gifUrl}}
            contentFit='cover'
            style={[{width:wp(100), height:wp(100)},tw`rounded-b-[40px]`]}
          />
        </View>
        
        {/* detail about exercise */}
        <ScrollView style={tw`mx-4 space-y-2 mt-3`} showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:60}} >
          <Animated.Text entering={FadeInDown.duration(300).springify()}
          style={[tw`font-semibold text-neutral-800 tracking-wide`,{fontSize:hp(3.5)}]}>
            {item.name}
          </Animated.Text>
          <Animated.Text entering={FadeInDown.delay(100).duration(300).springify()} 
          style={[tw`text-neutral-800 tracking-wide`,{fontSize:hp(2)}]}>
            Equipment:
            <Text style={tw`font-bold text-neutral-700 `}>
              {item?.equipment}
            </Text>
          </Animated.Text>
          <Animated.Text entering={FadeInDown.delay(200).duration(300).springify()}
          style={[tw`text-neutral-800 tracking-wide`,{fontSize:hp(2)}]}>
            Secondary Muscles:
            <Text style={tw`font-bold text-neutral-700 `}>
              {item?.secondaryMuscles}
            </Text>
          </Animated.Text>
          <Animated.Text entering={FadeInDown.delay(300).duration(300).springify()} 
          style={[tw`text-neutral-800 tracking-wide`,{fontSize:hp(2)}]}>
            Target:
            <Text style={tw`font-bold text-neutral-700 `}>
              {item?.secondaryMuscles}
            </Text>
          </Animated.Text>
          <Animated.Text entering={FadeInDown.delay(400).duration(300).springify()} 
          style={[tw`font-semibold text-neutral-800 tracking-wide`,{fontSize:hp(3)}]}>
            Instructions
          </Animated.Text>
          {
            
            Array.isArray(item.instructions) && item.instructions.length > 0 ? (
              item.instructions.map((instruction, index) => (
                  <Animated.Text entering={FadeInDown.delay(500).duration(300).springify()} 
                  key={index} style={[tw`text-neutral-800`, { fontSize: hp(1.7) }]}>
                      {instruction.trim()}
                  </Animated.Text>
              ))
          ) : (
              <Text style={[tw`text-neutral-800`, { fontSize: hp(1.7) }]}>
                  No instructions available.
              </Text>
          )}
        
                 
        </ScrollView>


      </View>
    )
  
}
