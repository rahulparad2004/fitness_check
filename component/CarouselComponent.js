// import React, { useState } from "react";
// import { View, Image, Dimensions, StyleSheet } from "react-native";
// import Carousel from "react-native-snap-carousel";

// const { width } = Dimensions.get("window"); // Get screen width

// const images = [
//     require('../assets/images/slide1.png'),
//     require('../assets/images/slide2.png'),
//     require('../assets/images/slide3.png'),
//     require('../assets/images/slide4.png'),
//     require('../assets/images/slide5.png'),
// ];

// const CarouselComponent = () => {
//     const [activeIndex, setActiveIndex] = useState(0);
  
//     const renderItem = ({ item }) => (
//       <View style={styles.slide}>
//         <Image source={{ uri: item }} style={styles.image} />
//       </View>
//     );
  
//     return (
//       <View style={styles.container}>
//         <Carousel
//           data={images}
//           renderItem={renderItem}
//           sliderWidth={width}
//           itemWidth={width * 0.8} // Adjust item width
//           onSnapToItem={(index) => setActiveIndex(index)} // Update active index
//           loop={true} // Enable infinite loop
//           autoplay={true} // Auto-slide images
//           autoplayInterval={3000} // 3-second interval
//         />
//       </View>
//     );
//   };
  
//   const styles = StyleSheet.create({
//     container: {
//       alignItems: "center",
//       marginTop: 20,
//     },
//     slide: {
//       justifyContent: "center",
//       alignItems: "center",
//       backgroundColor: "#fff",
//       borderRadius: 10,
//       overflow: "hidden",
//     },
//     image: {
//       width: "100%",
//       height: 250,
//       borderRadius: 10,
//     },
//   });
  
//   export default CarouselComponent;

import React, { useState } from "react";
import { View, Image, Dimensions, StyleSheet } from "react-native";
import Carousel from "react-native-snap-carousel";

const { width } = Dimensions.get("window"); // Get screen width

const images = [
    require('../assets/images/slide1.png'),
    require('../assets/images/slide2.png'),
    require('../assets/images/slide3.png'),
    require('../assets/images/slide4.png'),
    require('../assets/images/slide5.png'),
];

const CarouselComponent = () => {
    const [activeIndex, setActiveIndex] = useState(0);
  
    const renderItem = ({ item }) => (
      <View style={styles.slide}>
        <Image source={item} style={styles.image} />
      </View>
    );
  
    return (
      <View style={styles.container}>
        <Carousel
          data={images}
          renderItem={renderItem}
          sliderWidth={width}
          itemWidth={width * 0.75} // Reduce width to create gaps
          inactiveSlideScale={0.9} // Slightly scale down inactive slides
          inactiveSlideOpacity={0.7} // Make inactive slides slightly transparent
          onSnapToItem={(index) => setActiveIndex(index)}
          loop={true}
          autoplay={true}
          autoplayInterval={3000}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      marginTop: 20,
    },
    slide: {
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 15, // Round edges
      overflow: "hidden", // Ensure image stays within border radius
    },
    image: {
      width: "100%",
      height: 250,
      borderRadius: 15, // Ensure corners are rounded
      resizeMode: "cover",
    },
  });
  
  export default CarouselComponent;
