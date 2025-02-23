// import React from 'react'
// import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
// import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
// import tw from 'twrnc';
// import { bodyParts } from '../constants';
// import LinearGradient from 'react-native-linear-gradient';

// export default function BodyParts({ navigation }) {
  
//     return (
//     <View style={tw`mx-4 mt-2`}>
//         <Text style={[tw`font-semibold text-neutral-700`,{fontSize:hp(3)}]}>Exercises</Text>

//         <FlatList
//             data={bodyParts}
//             numColumns={2}
//             keyExtractor={item=>item.name}
//             showsVerticalScrollIndicator={false}
//             // contentContainerStyle={{paddingBottom:50, paddingTop:20}}
//             // columnWrapperStyle={{justifyContent:'space-between'}}
//             contentContainerStyle={{ paddingBottom: 30, paddingTop: 10 }}
//             columnWrapperStyle={{ justifyContent: 'space-between', flexWrap: 'wrap' }}
//             renderItem={({item,index})=> <BodyPartsCard index={index} item={item} navigation={navigation} />}
//         />

//     </View>
//     )  
// }

// const BodyPartsCard = ({item,index,navigation})=> {
//     return(
//         <View>
//             <TouchableOpacity
//                 // style={[tw`flex justify-end p-4 mb-4`,{width:wp(44),height:hp(52)}]}
//                 style={[tw`flex justify-end`, { width: wp(44), height: hp(25), marginBottom: 10 }]} onPress={() => navigation.navigate('Exercises', { bodyPart: item.name })}
//                 >
//                     <Image 
//                         source={item.image}
//                         resizeMethod='cover'
//                         // style={[{width:wp(44),height:wp(52)}, tw`rounded-[35px] absolute`]}
//                         //style={[{ width: "100%", height: "100%" }, tw`rounded-xl absolute`]} 
//                         style={[{ width:wp(44),height:wp(52)}, tw`rounded-xl absolute`]} 
                        
//                     />
//                     <LinearGradient
//                         colors={['transparent','rgba(0,0,0,0.9)']}
//                         style={[
//                             tw`absolute bottom-0  rounded-xl`,
//                             { width: wp(44),height: hp(15)}
//                         ]}
//                         start={{x:0.5, y:0}}
//                         end={{x:0.5, y:1}}
//                     />
                     
//                     <Text style={[tw`text-white font-semibold text-center tracking-wide`,{fontSize:hp(2.3)}]}>
//                         {item.name}
//                     </Text>

//             </TouchableOpacity>
//         </View>
//     )
// }



import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import tw from 'twrnc';
import { bodyParts } from '../constants';
import LinearGradient from 'react-native-linear-gradient';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function BodyParts({ navigation }) {
  return (
    <View style={tw`mx-4 mt-2`}>
      <Text style={[tw`font-semibold text-neutral-700`, { fontSize: hp(3) }]}>Exercises</Text>

      <FlatList
        data={bodyParts}
        numColumns={2}
        keyExtractor={item => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30, paddingTop: 10 }}
        columnWrapperStyle={{ justifyContent: 'space-between', flexWrap: 'wrap' }}
        renderItem={({ item, index }) => <BodyPartsCard index={index} item={item} navigation={navigation} />}
      />
    </View>
  );
}

const BodyPartsCard = ({ item, index, navigation }) => {
  return (
    <Animated.View entering={FadeInDown.duration(400).delay(index*200).springify()}>
      <TouchableOpacity
        style={[tw`flex justify-end`, { width: wp(44), height: hp(25), marginBottom: 10 }]}
        onPress={() => navigation.navigate('Exercises', { bodyPart: item.name, image: item.image })}
      >
        <Image
          source={item.image}
          resizeMethod='cover'
          style={[{ width: wp(44), height: wp(52) }, tw`rounded-xl absolute`]}
        />
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.9)']}
          style={[tw`absolute bottom-0 rounded-xl`, { width: wp(44), height: hp(15) }]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
        />
        <Text style={[tw`text-white font-semibold text-center tracking-wide`, { fontSize: hp(2.3) }]}>
          {item.name}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};
