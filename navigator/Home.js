import React from 'react'
import {
    Image,
    StatusBar,
    Text,
    View,
} from 'react-native';
import tw from 'twrnc';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons'
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import Image_slider from '../component/Image_slider';
import Demo_img_slider from '../component/Demo_img_slider';
// import CarouselComponent from '../component/CarouselComponent';
import BodyParts from '../component/BodyParts';


function Home({ navigation }) {
  return (
    <View style={tw`flex-1 bg-white`}>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent"/>
      {/* punchline and avatar */}
      <View style={tw`flex-row justify-between items-center mx-5 mt-15`}>
        <View style={tw`space-y-2`}>
          <Text style={[tw`font-bold tracking-wider  text-neutral-700`,{fontSize:hp(4,5)}]}>Ready To
            
          </Text>
          <Text style={[tw`font-bold tracking-wider  text-rose-500`,{fontSize:hp(4,5)}]}>WORKOUT

          </Text>
        </View>
          {/* avatar */}
          <View style={tw`flex justify-center items-center space-y-2`}>
            <Image source={require('../assets/images/avatar.png')} style={[{height:hp(8),width:hp(8)}, tw`rounded-full`]}/>
            {/* <View style={[tw`bg-neutral-200 rounded-full flex justify-center items-center border-[3px] border-neutral-300`,{height:hp(5.5), width:hp(5.5)}]}>

            <Ionicons name="notifications" size={hp(2.5)} color="gray" />
            </View> */}

          </View>

      </View>  
      {/* image slider */}
      <View>
        <Demo_img_slider/>
      </View>

      {/* body parts list */}
      <View style={tw`flex-1`}>
        <BodyParts navigation={navigation}/>
      </View>


    </View>
  )
}

export default Home
