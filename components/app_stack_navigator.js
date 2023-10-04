import React, { useState, useEffect } from "react";
import { Button, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { connect } from "react-redux";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import LottieView from "lottie-react-native";

import LoginPage from "./login_page/loginPage";
import SignupPage from "./login_page/signupPage";
import SvgComponent from "./graph_museum";
import ProfilePage from "./profile_page";
import { auth } from "./login_page/userAuth";

import { setUserData, resetResultUser } from "../redux/actions";
import store from "../redux/store";

const Stack = createStackNavigator();

function App(props) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(getAuth(), (user) => {
      // console.log("user", user);
      if (user) {
        store.dispatch(setUserData({ isLoggedIn: true }));
      } else {
        store.dispatch(resetResultUser()); //sets user as log out, resets result, source, destination
      }
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    });
  }, []);

  if (isLoading)
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LottieView
          autoPlay
          // ref={animation}
          source={require("../assets/98993-three-dots-loading.json")}
          style={{}}
          resizeMode="center"
        />
      </View>
    );

  return (
    <NavigationContainer>
      {!props.user.isLoggedIn ? (
        <Stack.Navigator>
          <Stack.Screen name="login" component={LoginPage} />
          <Stack.Screen name="signin" component={SignupPage} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={({ navigation }) => ({
            headerShown: true,
            headerRight: () => (
              <Button
                onPress={() => {
                  // getAuth().signOut(); //!!
                  // store.dispatch(setUserData({ isLoggedIn: false })); //! this is not needed
                  navigation.navigate("profile");
                }}
                title="Profile"
                // color="#fff"
                style={{ marginRight: 10 }}
              />
            ),
          })}
        >
          <Stack.Screen
            name="home"
            component={SvgComponent}
            options={{ title: "Central Block" }}
            // options={{ title: auth.currentUser?.displayName }}
          />
          <Stack.Screen
            name="profile"
            component={ProfilePage}
            options={{
              title: "Profile",
              headerRight: () => (
                <Button
                  onPress={() => {
                    getAuth().signOut(); //!!
                    // store.dispatch(setUserData({ isLoggedIn: false })); //! this is not needed
                    // navigation.navigate("profile");
                  }}
                  title="Log out"
                  // color="#fff"
                  style={{ marginRight: 10 }}
                />
              ),
            }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(App);
