import * as React from "react";
import { Button, View, Text, StyleSheet, Switch } from "react-native";
import MuseumCentralGround from "./svg/museum_central_ground";
import MuseumCentralFirst from "./svg/museum_central_first";
// import Svg, { Rect, G, Path, Circle } from "react-native-svg";
// import SvgPanZoom, { SvgPanZoomElement } from "react-native-svg-pan-zoom";
import ReactNativeZoomableView from "@openspacelabs/react-native-zoomable-view/src/ReactNativeZoomableView";
import * as ScreenOrientation from "expo-screen-orientation";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { connect } from "react-redux";

import DijsktraCall, { Node } from "./dijsktra_call";
import { LinePathPath } from "./linePath";
import store from "../redux/store";
import { PointCircle } from "./point";
import { setResult, resetResult } from "../redux/actions";
import MuseumBottomSheet from "./museum_bottom_sheet";
import { MUSEUM_DATA } from "./museum_bottom_sheet";
import Icon from "react-native-vector-icons/FontAwesome";

const SvgComponent = (props) => {
  async function changeScreenOrientation(isMap) {
    await ScreenOrientation.lockAsync(
      isMap
        ? ScreenOrientation.OrientationLock.LANDSCAPE
        : ScreenOrientation.OrientationLock.PORTRAIT
    );
  }

  React.useEffect(() => {
    changeScreenOrientation(true);
    // computeDijkstra();

    return () => {
      changeScreenOrientation(false);
    };
  }, []);

  React.useEffect(() => {
    computeDijkstra();
  }, [props.source.id]);

  const computeDijkstra = () => {
    const starting_node = new Node(store.getState().source.id, 0);
    let res = DijsktraCall(starting_node);
    console.log(res);
    store.dispatch(setResult(res));
  };

  //for switch
  const [firstFloor, setfirstFloor] = React.useState(false);
  const toggleSwitch = () => {
    store.dispatch(resetResult());
    setfirstFloor((previousState) => !previousState);
  };

  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
        backgroundColor: "#F8F9FA",
        justifyContent: "center",
        alignItems: "stretch",
      }}
    >
      {/* <SvgPanZoom
        style={{
          flex: 5,
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
        }}
        maxScale={2}
        minScale={0.4}
      > */}
      <ReactNativeZoomableView
        style={{
          flex: 1,
          // width: "100%",
          // backgroundColor: "beige",
        }}
        maxZoom={2.5}
        minZoom={1}
        zoomStep={0.5}
        initialZoom={1}
        bindToBorders={true}
        pinchToZoomOutSensitivity={1}
        pinchToZoomInSensitivity={3}
      >
        {firstFloor ? <MuseumCentralFirst /> : <MuseumCentralGround />}
      </ReactNativeZoomableView>
      {/* </SvgPanZoom> */}

      <View
        style={{
          position: "absolute",
          top: "1%",
          left: "1%",
          width: "10%",
        }}
      >
        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            alignSelf: "center",
            marginBottom: 18,
          }}
          // adjustsFontSizeToFit
        >
          First floor
        </Text>

        <Switch
          trackColor={{ false: "#CEEAD6", true: "#fbc9cc" }}
          thumbColor={firstFloor ? "#f4f3f4" : "#f4f3f4"}
          onValueChange={toggleSwitch}
          value={firstFloor}
          style={{
            position: "absolute",
            top: 13,
            left: 20,
            transform: [{ rotate: "-90deg" }],
          }}
        />

        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            alignSelf: "center",
            marginTop: 18,
          }}
        >
          Ground floor
        </Text>
      </View>

      <View style={{ position: "absolute", bottom: "21%", left: "3%" }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Icon
            name="circle"
            size={15}
            color="blue"
            style={{ marginRight: "3%" }}
          />
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
            }}
          >
            Source:&nbsp;
          </Text>
        </View>
        <Text>
          {MUSEUM_DATA[firstFloor ? "first" : "ground"][props.source.id]
            ?.title || "(click a point to select)"}
        </Text>
      </View>
      <View style={{ position: "absolute", bottom: "21%", right: "3%" }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Icon
            name="circle"
            size={15}
            color="red"
            style={{ marginRight: "3%" }}
          />
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
            }}
          >
            Destination:&nbsp;
          </Text>
        </View>
        <Text>
          {MUSEUM_DATA[firstFloor ? "first" : "ground"][
            props.destination.tempId
          ]?.title !=
          MUSEUM_DATA[firstFloor ? "first" : "ground"][props.source.id]?.title
            ? MUSEUM_DATA[firstFloor ? "first" : "ground"][
                props.destination.tempId
              ]?.title
            : "(click a point to select)"}
        </Text>
      </View>

      {/* <Button title={"Compute"} style={{ flex: 1 }} onPress={computeDijkstra} /> */}

      {props.destination.id ? (
        <View
          style={{
            position: "absolute",
            top: "1%",
            right: "1%",
          }}
        >
          <Button
            title={"Reset path"}
            color="red"
            onPress={() => {
              store.dispatch(resetResult());
            }}
          />
        </View>
      ) : null}

      <MuseumBottomSheet floor={firstFloor ? "first" : "ground"} />
    </GestureHandlerRootView>
    // </View>
  );
};

const mapStateToProps = (state) => ({
  source: state.source,
  destination: state.destination,
});

export default connect(mapStateToProps)(SvgComponent);
