// import React from 'react'
// import { View,Text,Dimensions } from 'react-native'
// import Carousel,{ParallaxImage} from 'react-native-snap-carousel';
// import { sliderImages } from '../constants/index';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

// const ItemCard = ({ item, index, parallaxProps }) => {
//   return (
//     <View style={{width:wp(100) - 70,height:hp(25)}}>
//       <ParallaxImage
//         source={item}
//         // containerStyle={{ resizeMode: 'contain'}}
//         containerStyle={{ flex: 1, borderRadius: 5, marginBottom: Platform.select({ ios: 0, android: 1 }) }}
//         style={{ ...StyleSheet.absoluteFillObject, resizeMode: 'cover' }}
//         parallaxFactor={0.4}
//         // parallaxFactor={1}
//         {...parallaxProps}
//       />
//       <Text style={{ textAlign: 'center', marginTop: 10 }}>{`Slide ${index + 1}`}</Text>
//     </View>
//   );
// };


// function Image_slider() {
//   return (
//     <Carousel 
//         data={sliderImages}
//         loop={true}
//         autoplay={true}
//         // renderItem={({ item, index }, parallaxProps) => (
//         //     <ItemCard item={item} index={index} parallaxProps={parallaxProps} />
//         // )}
//         renderItem={({ item, index }, parallaxProps) => (
//           <ItemCard item={item} index={index} parallaxProps={parallaxProps} />
//         )}
//         hasParallaxImages={true}
//         sliderWidth={wp(100)}
//         firstItem={1}
//         autoplayInterval={4000}
//         itemWidth={wp(100) - 70}
//         slideStyle={{ display: 'flex', alignItems: 'center' }}
//         // renderItem={ItemCard}
//         // hasParallaxImages={true}
//         // sliderWidth={wp(100)}
//         // firstItem={1}
//         // autoplayInterval={4000}
//         // itemWidth={wp(100)-70}
//         // slideStyle={{display: 'flex', alignItems: 'center'}}
//     />
        
//   )
// }

// export default Image_slider
import React from 'react';
import { View, Text, Platform, StyleSheet } from 'react-native';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { sliderImages } from '../constants/index';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const ItemCard = ({ item, index, parallaxProps }) => {
  return (
    <View style={{ width: wp(100) - 70, height: hp(25) }}>
      <ParallaxImage
        source={item}
        containerStyle={{ flex: 1, borderRadius: 5, marginBottom: Platform.select({ ios: 0, android: 1 }) }}
        style={{ ...StyleSheet.absoluteFillObject, resizeMode: 'cover' }}
        parallaxFactor={0.4}
        {...parallaxProps}
      />
      <Text style={{ textAlign: 'center', marginTop: 10 }}>{`Slide ${index + 1}`}</Text>
    </View>
  );
};

function Image_slider() {
  return (
    <Carousel
      data={sliderImages}
      loop={true}
      autoplay={true}
      renderItem={({ item, index }, parallaxProps) => (
        <ItemCard item={item} index={index} parallaxProps={parallaxProps} />
      )}
      hasParallaxImages={true}
      sliderWidth={wp(100)}
      firstItem={1}
      autoplayInterval={4000}
      itemWidth={wp(100) - 70}
      slideStyle={{ display: 'flex', alignItems: 'center' }}
    />
  );
}

export default Image_slider;




// import React from 'react';
// import tw from 'twrnc'
// import { View, Text, Image } from 'react-native';
// import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
// import { sliderImages } from '../constants/index';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

// const ItemCard = ({ item, index, parallaxProps }) => {
//   return (
//     <View style={{ width: wp(100) - 70, height: hp(25) }}>
//       <ParallaxImage
//         source={item}
//         containerStyle={{ resizeMode: 'contain' }}
//         parallaxFactor={1}
//         {...parallaxProps}
//       />
//       <Text style={{ textAlign: 'center', marginTop: 10 }}>{`Slide ${index + 1}`}</Text>
//     </View>
//   );
// };

// function Image_slider() {
//   return (
//     <Carousel
//       data={sliderImages}
//       loop={true}
//       autoplay={true}
//       renderItem={({ item, index }, parallaxProps) => (
//         <ItemCard item={item} index={index} parallaxProps={parallaxProps} />
//       )}
//       hasParallaxImages={true}
//       sliderWidth={wp(100)}
//       firstItem={1}
//       autoplayInterval={4000}
//       itemWidth={wp(100) - 70}
//       slideStyle={{ display: 'flex', alignItems: 'center' }}
//     />
//   );
// }

// export default Image_slider;