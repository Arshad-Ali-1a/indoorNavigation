import * as React from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";

import { auth } from "./userAuth";
import {
  signInWithEmailAndPassword,
  getAuth,
  sendPasswordResetEmail,
} from "firebase/auth";

import { setUserData } from "../../redux/actions";
import store from "../../redux/store";

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  inputs: {
    paddingLeft: 7,
    paddingVertical: 5,
    borderRadius: 13,
    borderColor: "#ccc",
    borderWidth: 1,
    margin: 10,
    width: 200,
  },
});

class LoginPage extends React.Component {
  state = {
    email: "",
    password: "",
    showLoginPage: true,
    isError: "",
  };

  inputHandler = (key) => (value) => {
    this.setState({ [key]: value });
  };

  emailHandler = this.inputHandler("email");
  passwordHandler = this.inputHandler("password");

  formValid = () =>
    this.state.email.length >= 3 && this.state.password.length >= 6;

  handleSubmit = () => {
    this.setState({ isError: "Loading..." });
    signInWithEmailAndPassword(auth, this.state.email, this.state.password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        // this.props.navigation.navigate("home");
        // store.dispatch(setUserData({ isLoggedIn: true })); //!!!!
        this.setState({ isError: "" });
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
            this.setState({ isError: "Invalid email" });
            console.warn("invalid email");
            break;
          case "auth/wrong-password":
            this.setState({ isError: "Wrong password" });
            console.warn("wrong password");
            break;
          default:
            this.setState({ isError: err.message });
            console.warn(err.code, err.message);
            break;
        }
      });
  };

  render() {
    if (!this.state.showLoginPage)
      return <Text>Hello {auth.currentUser?.email}</Text>;

    return (
      <View style={styles.container}>
        <Text>Login Page</Text>
        <TextInput
          style={{ ...styles.inputs, marginTop: "7%" }}
          onChangeText={this.emailHandler}
          A
          placeholder="email"
          autoCapitalize="none"
          value={this.state.email}
          maxLength={30}
        />
        <TextInput
          style={{ ...styles.inputs, marginBottom: "4%" }}
          onChangeText={this.passwordHandler}
          secureTextEntry={true}
          placeholder="password"
          value={this.state.password}
          maxLength={20}
        />
        <Text
          style={{ marginBottom: "2%", color: "blue" }}
          onPress={() => {
            if (this.state.email.length < 3) {
              alert("Please enter a valid email address");
              return;
            }
            Alert.alert("Forgot Password?", "Send Password reset email?", [
              {
                text: "Cancel",
                onPress: () => {},
              },
              {
                text: "Reset",
                onPress: () => {
                  sendPasswordResetEmail(getAuth(), this.state.email)
                    .then(() => alert("Password reset email sent"))
                    .catch((error) => alert(error.message));
                },
              },
            ]);
          }}
        >
          Forgot password?
        </Text>

        <Button
          title="login"
          disabled={!this.formValid()}
          onPress={this.handleSubmit}
        />
        <Text style={{ marginTop: "7%" }}>Don't have an account:</Text>
        <Button
          title={"Sign up"}
          onPress={() => {
            this.props.navigation.navigate("signin");
          }}
        />

        <Text>{this.state.isError ?? ""}</Text>
      </View>
    );
  }
}

export default LoginPage;
