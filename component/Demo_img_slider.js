// import React from "react";
// import { View, Image, FlatList, Dimensions, StyleSheet } from "react-native";

// const { width } = Dimensions.get("window"); // Get screen width

// const images = [
//     require('../assets/images/slide1.png'),
//     require('../assets/images/slide2.png'),
//     require('../assets/images/slide3.png'),
//     require('../assets/images/slide4.png'),
//     require('../assets/images/slide5.png'),
// ];

// const Demo_img_slider = () => {
//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={images}
//         horizontal
//         pagingEnabled
//         showsHorizontalScrollIndicator={false}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item }) => (
//           <Image source={item} style={styles.image} />
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 20,
//   },
//   image: {
//     width: width,
//     height: 250,
//     resizeMode: "cover",
//   },
// });

// export default Demo_img_slider;

// 


import React from "react";
import { View, Image, FlatList, Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

const images = [
    require('../assets/images/slide1.png'),
    require('../assets/images/slide2.png'),
    require('../assets/images/slide3.png'),
    require('../assets/images/slide4.png'),
    require('../assets/images/slide5.png'),
];

const Demo_img_slider = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        snapToInterval={width * 0.8 + 20} // Match image width + margin
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image source={item} style={styles.image} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  imageContainer: {
    marginHorizontal: 10, // Space between images
    borderRadius: 15,
    overflow: "hidden",
  },
  image: {
    width: width * 0.8, // Reduce width for centering
    height: 250,
    borderRadius: 15,
    resizeMode: "cover",
  },
});

export default Demo_img_slider;


//export default Demo_img_slider;



