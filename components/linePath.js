import * as React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import { Line, Path } from "react-native-svg";
import { connect } from "react-redux";

// const result = {
//   distance: [0, 99, 116, 87, 77],
//   path: [[], [0, 1], [0, 1, 2], [0, 4, 3], [0, 4]],
// };

const LinePath = (props) => {
  const [color, setColor] = React.useState("#D9D9D9");

  const checkPath = () => {
    if (props.result.distance.length === 0) return "#D9D9D9";
    // console.log(props.destination);

    let pathh = props.result.path[props.destination.id];
    let draw_path = [];
    for (let i = 0; i < pathh.length - 1; i++) {
      draw_path.push(`${pathh[i]}-${pathh[i + 1]}`);
      draw_path.push(`${pathh[i + 1]}-${pathh[i]}`);
    }
    let req_path = draw_path;

    if (req_path.includes(props.id)) {
      console.log(props.id);
      return "red";
    } else return "#D9D9D9";
  };
  return (
    <Line
      {...props}
      strokeWidth={15}
      onPress={() => {
        console.log(props.id);
        console.log(
          Math.round(
            Math.sqrt((props.x1 - props.x2) ** 2 + (props.y1 - props.y2) ** 2)
          )
        );
        setColor("red");
      }}
      stroke={checkPath()}
    />
  );
};

const LinePathWithPath = (props) => {
  const [color, setColor] = React.useState("#D9D9D9");

  const checkPath = () => {
    if (props.result.distance.length === 0) return "#44b7d033"; // or #F8F9FA or #D9D9D9
    if (props.destination.id === undefined) return "#44b7d033"; // or #F8F9FA or #D9D9D9
    // console.log(props.destination);

    let pathh = props.result.path[props.destination.id];
    let draw_path = [];
    for (let i = 0; i < pathh.length - 1; i++) {
      draw_path.push(`${pathh[i]}-${pathh[i + 1]}`);
      draw_path.push(`${pathh[i + 1]}-${pathh[i]}`);
    }
    let req_path = draw_path;

    const id = props.id.replace("linepath_", "");
    if (req_path.includes(id)) {
      console.log(id);
      return "red";
    } else return "#44b7d033"; // or #F8F9FA
  };

  return (
    <Path
      {...props}
      strokeWidth={4}
      // onPress={() => {
      //   console.log(props.id);
      //   setColor("red");
      // }}
      stroke={checkPath()}
    />
  );
};

const mapStateToProps = (state) => ({
  result: state.result,
  destination: state.destination,
});

export default connect(mapStateToProps)(LinePath);

const LinePathPath = connect(mapStateToProps)(LinePathWithPath);

export { LinePathPath };
