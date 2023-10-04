import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

// const { width, height } = Dimensions.get("window");

const images = [
  { id: 1, image: require("../assets/collection_images/ground/13/1.jpg") },
  { id: 2, image: require("../assets/collection_images/ground/13/2.jpg") },
  { id: 3, image: require("../assets/collection_images/ground/13/3.jpg") },
  { id: 4, image: require("../assets/collection_images/ground/13/4.jpg") },
];

const NextIcon = () => (
  <Icon
    name="rightcircleo"
    size={40}
    color="#900"
    style={{
      position: "absolute",
      alignSelf: "center",
      backgroundColor: "#ffffffaa",
      borderRadius: 20,
    }}
  />
);

const Carousel = ({ data }) => {
  const currentRef = React.useRef(null);
  const [index, setIndex] = React.useState(0);

  return (
    <View
      style={{
        ...styles.container,
        flexDirection: "row",
        // backgroundColor: "red",
      }}
    >
      <FlatList
        ref={currentRef}
        initialScrollIndex={index}
        style={{ flex: 1, marginLeft: "3%", paddingLeft: "7%" }}
        data={data}
        keyExtractor={(item) => item.id}
        //! makeimages zoomable by react native zoomable view.
        renderItem={(pp) => (
          <View style={{ ...styles.container, backgroundColor: "white" }}>
            <Image source={pp.item.image} style={{ ...styles.image }}></Image>
          </View>
        )}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        ListFooterComponent={() => (
          <View style={{ width: 260, backgroundColor: "pink" }} />
        )}
        // bounces={false}
        // bouncesZoom={true}
      />
      <TouchableOpacity
        style={{ marginRight: "2%" }}
        onPress={() => {
          // console.log(index);
          if (index >= data.length - 1) {
            currentRef.current?.scrollToIndex({ index: 0 });
            setIndex(0);
          } else {
            currentRef.current?.scrollToIndex({ index: index + 1 });
            setIndex(index + 1);
          }
          // console.log(index);
        }}
      >
        <NextIcon />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    marginLeft: 120,
    flex: 1,
    width: 500,
    height: 300,
    resizeMode: "contain",
    borderRadius: 20,
    borderColor: "red",
    overflow: "hidden",
  },
});

export default Carousel;
