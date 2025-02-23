import React, { useEffect, useState } from 'react'
import { Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import { fetchExercisesByBodypart } from '../api/ExerciseDB';
import { demoExercises } from '../constants';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import tw from 'twrnc';
import ExerciseList from '../component/ExerciseList';
import { ScrollView } from 'react-native-virtualized-view';


export default function Exercises({route,navigation}) {
    const { bodyPart, image } = route.params;
    const [Exercises, setExercises] = useState([])
    // console.log('Got bodyPart: ', bodyPart); 
    
    useEffect(()=>{
        if(bodyPart) getExercises(bodyPart)
    },[bodyPart])

    const getExercises = async (ele)=>{
        let data = await fetchExercisesByBodypart(ele)
        // console.log('get data:', data);
        setExercises(data);
    }

    return (
        <ScrollView>
            <Image
               source={image} 
               style={[{width:wp(100),height:hp(45)},tw`rounded-b-[40px]`]}
            />

            {/* Exercises */}
            <View style={tw`mx-4 space-y-3 mt-4`}>
                <Text style={[tw`font-semibold text-neutral-700`,{fontSize:hp(3)}]}>
                    {bodyPart} exercises
                </Text>
                <View style={tw`mb-10`}>
                    <ExerciseList data={Exercises} navigation={navigation}/>
                </View>
            </View>

        </ScrollView>
    );
}
