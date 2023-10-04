import React from "react";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { auth } from "./userAuth";
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
    margin: "2%",
    width: 200,
  },
});

class SignupPage extends React.Component {
  state = {
    email: "",
    password1: "",
    password2: "",
    displayName: "",
    showSignupPage: true,
    emailError: "",
    passwordError: "",
  };

  inputHandler = (key) => (value) => {
    this.setState({ [key]: value });
  };

  emailHandler = this.inputHandler("email");
  password1Handler = this.inputHandler("password1");
  password2Handler = this.inputHandler("password2");
  displayNameHandler = this.inputHandler("displayName");

  formValid = () =>
    this.state.email.length >= 3 &&
    this.state.displayName.length >= 3 &&
    this.state.password1.length >= 6 &&
    this.state.password1 === this.state.password2;

  handleSubmit = () => {
    var user;
    this.setState({ emailError: "Loading..." });

    createUserWithEmailAndPassword(auth, this.state.email, this.state.password1)
      .then((userCredential) => {
        // Signed in
        user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: this.state.displayName,
        });
        // console.log(user);
        // this.setState({ showSignupPage: false });
        // store.dispatch(setUserData({ isLoggedIn: true })); //!!
        this.setState({ emailError: "" });
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
            this.setState({ emailError: err.message });
            console.warn("used email");
            break;
          case "auth/invalid-email":
            this.setState({ emailError: err.message });
            break;
          default:
            console.warn(err.message);
            this.setState({ emailError: err.message });
        }
      });
  };

  render() {
    // if (!this.state.showSignupPage) {
    //   return (
    //     <View style={styles.container}>
    //       <Text>Hello {auth.currentUser?.email}</Text>
    //     </View>
    //   );
    // }

    return (
      <View style={styles.container}>
        <Text style={{ marginBottom: "5%" }}>Sign-up Page</Text>
        <TextInput
          style={styles.inputs}
          onChangeText={this.emailHandler}
          placeholder="email"
          autoCapitalize="none"
          value={this.state.email}
          maxLength={30}
        />
        <TextInput
          style={styles.inputs}
          onChangeText={this.displayNameHandler}
          placeholder="name"
          autoCapitalize="words"
          value={this.state.displayName}
          maxLength={30}
        />
        <TextInput
          style={{ ...styles.inputs }}
          onChangeText={this.password1Handler}
          secureTextEntry={true}
          placeholder="password"
          value={this.state.password1}
          maxLength={30}
        />
        <TextInput
          style={{ ...styles.inputs, marginBottom: "6%" }}
          onChangeText={this.password2Handler}
          secureTextEntry={true}
          placeholder="retype password"
          value={this.state.password2}
          maxLength={30}
        />

        <Button
          title="Submit"
          disabled={!this.formValid()}
          onPress={this.handleSubmit}
        />
        <View style={{ marginTop: "2%" }}>
          <Button
            title="Login Page"
            onPress={() => {
              this.props.navigation.navigate("login");
            }}
          />
        </View>

        <Text>{this.state.emailError != "" && this.state.emailError}</Text>
      </View>
    );
  }
}

export default SignupPage;
