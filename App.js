import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { AuthProvider, AuthContext } from "./app/(auth)/AuthContext";
import AuthScreen from "./app/(auth)/AuthScreen";
import AuthenticatedScreen from "./app/(tabs)/AuthenticatedScreen";
import UserProfile from "./app/(auth)/UserProfile";
import { SafeAreaProvider } from "react-native-safe-area-context";

const App = () => {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <ScrollView contentContainerStyle={styles.container}>
          <AuthContext.Consumer>
            {({ user }) => (
              <>
                <UserProfile />
                {user ? <AuthenticatedScreen /> : <AuthScreen />}
              </>
            )}
          </AuthContext.Consumer>
        </ScrollView>
      </AuthProvider>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f0f0f0",
  },
});

export default App;