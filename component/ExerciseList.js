import React from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import tw from 'twrnc'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function ExerciseList({data,navigation}) {  
    return (
        <View>
            <FlatList
                data={data}
                numColumns={2}
                keyExtractor={item => item.name}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 35, paddingTop: 10 }}
                columnWrapperStyle={{ justifyContent: 'space-between', flexWrap: 'wrap' }}
                renderItem={({ item, index }) => <ExerciseCard index={index} item={item}  navigation={navigation}  />}
            />
        </View>
    )
  
}


// const ExerciseCard = ({item, navigation}) =>{
//     return(
//         <View>
//             <TouchableOpacity style={tw`flex py-3 space-y-2`} onPress={() => navigation.navigate('ExerciseDetail', { item })}            
//             >
//                 <View style={tw`bg-neutral-200 rounded-[25px]`}>
//                     <Image
//                         source={{uri: item.gifUrl}}
//                         contentFit='cover'
//                         style={[{width:wp(44), height:wp(52)},tw`rounded-[25px]`]}
//                     />
//                 </View>
//                 <Text style={[{fontSize:hp(1.7)},tw`text-neutral-700 font semibold ml-1 tracking-wide`]}>
//                     {
//                         item?.name?.length>20? item.name.slice(0,20)+'...': item.name 
//                     }
//                 </Text>
//             </TouchableOpacity>
//         </View>

//     )
// }

const ExerciseCard = ({ item, index, navigation }) => {
    return (
      <Animated.View entering={FadeInDown.duration(400).delay(index*200).springify()}>
        <TouchableOpacity style={tw`flex py-3 space-y-2`} onPress={() => navigation.navigate('ExerciseDetail', { item })}>
          <View style={tw`bg-neutral-200 rounded-[25px]`}>
            <Image
              source={{ uri: item.gifUrl }}
              contentFit='cover'
              style={[{ width: wp(44), height: wp(52) }, tw`rounded-[25px]`]}
            />
          </View>
          <Text style={[{ fontSize: hp(1.7) }, tw`text-neutral-700 font semibold ml-1 tracking-wide`]}>
            {item?.name?.length > 20 ? item.name.slice(0, 20) + '...' : item.name}
          </Text>
        </TouchableOpacity>
      </Animated.View>
    );
};
