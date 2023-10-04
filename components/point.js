import * as React from "react";
import { Ellipse, Circle } from "react-native-svg";
import { connect } from "react-redux";
import { SvgPanZoomElement } from "react-native-svg-pan-zoom";

import { setDestination } from "../redux/actions";
import store from "../redux/store";

const Point = (props) => {
  const [color, setColor] = React.useState("#D9D9D9");

  const getColor = () => {
    if (props.source.id === props.id) return "blue";
    if (props.destination.id === props.id) return "red";
    return "#D9D9D9";
  };

  return (
    <Ellipse
      {...props}
      onPress={() => {
        console.log(props.id);
        store.dispatch(setDestination({ id: props.id }));
      }}
      onLongPress={() => {
        console.log("long press ", props.id);
        store.dispatch({ type: "SET_SOURCE", payload: { id: props.id } });
      }}
      fill={getColor()}
    />
  );
};

const PointCircleComponent = (props) => {
  const [color, setColor] = React.useState("#D9D9D9");

  const getColor = () => {
    const id = props.id.replace("point_", "");
    if (props.source.id == id) return "blue";
    if (props.destination.tempId == id) return "red";
    return "#D9D9D9";
  };

  return (
    // <SvgPanZoomElement>
    <Circle
      {...props}
      onPress={() => {
        const id = props.id.replace("point_", "");
        console.log(id);
        store.dispatch(setDestination({ id }));
      }}
      onLongPress={() => {
        const id = props.id.replace("point_", "");
        console.log("long press ", props.id);
        store.dispatch({ type: "SET_SOURCE", payload: { id } });
      }}
      fill={getColor()}
    />
    // </SvgPanZoomElement>
  );
};

const mapStateToProps = (state) => ({
  source: state.source,
  destination: state.destination,
});

export default connect(mapStateToProps)(Point);

const PointCircle = connect(mapStateToProps)(PointCircleComponent);
export { PointCircle };
