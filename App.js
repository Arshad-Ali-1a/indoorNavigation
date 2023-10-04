import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";

import { Provider } from "react-redux";
import * as React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import SvgComponent from "./components/graph_complex";
import store from "./redux/store";

import App_stack_navigator from "./components/app_stack_navigator";

import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

import MuseumBottomSheet from "./components/museum_bottom_sheet";

// async function changeScreenOrientation() {
//   await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.ALL);
// }

// changeScreenOrientation(); //changing this in graph_museum.

// export default function App() {
//   const bottomSheetRef = React.useRef(null);
//   const snapPoints = ["25%", "50%", "100%"];

//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <StatusBar style="auto" />
//       <View style={{ backgroundColor: "pink", ...styles.container }}>
//         <Text>Open up App.js to start working on your app!</Text>
//       </View>
//       <BottomSheet
//         snapPoints={snapPoints}
//         ref={bottomSheetRef}
//         enablePanDownToClose={true}
//       >
//         <BottomSheetView>
//           <Text>Helloooooooooooooo</Text>
//         </BottomSheetView>
//       </BottomSheet>
//     </GestureHandlerRootView>
//   );
// }

// const App = () => {
//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <MuseumBottomSheet></MuseumBottomSheet>
//     </GestureHandlerRootView>
//   );
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

// export default App;

export default () => (
  <Provider store={store}>
    <App_stack_navigator />
    <StatusBar style="auto" hidden={true} />
  </Provider>
);
