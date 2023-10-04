import * as React from "react";
import { Text, View, StyleSheet, Image, Button, Alert } from "react-native";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { Dimensions } from "react-native";

//profile page with user name, profile photo, email address, and log out button
export default function ProfilePage(props) {
  const user = getAuth().currentUser;

  return (
    <View style={styles.container}>
      <Image
        style={{
          height: Dimensions.get("window").height * 0.38,
          width: Dimensions.get("window").width * 0.17,
          borderRadius: 80,
          marginBottom: "3%",
          borderWidth: 1,
          borderColor: "black",
        }}
        source={require("../assets/profile_photo.jpg")}
      />
      <Text
        style={{
          marginBottom: "2%",
          textTransform: "uppercase",
          fontWeight: "bold",
          fontSize: 20,
        }}
      >
        {user.displayName ?? "'Anonymous'"}
      </Text>
      <Text style={{ marginBottom: "2%", fontSize: 15, fontStyle: "italic" }}>
        {user.email}
      </Text>
      <Button
        title="Reset Password"
        onPress={() => {
          Alert.alert(
            "Reset Password?",
            "Are you sure you want to reset your password?",
            [
              {
                text: "Cancel",
                onPress: () => {},
              },
              {
                text: "Reset",
                onPress: () => {
                  sendPasswordResetEmail(getAuth(), user.email)
                    .then(() => alert("Password reset email sent"))
                    .catch((error) => alert(error.message));
                },
              },
            ]
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
});
