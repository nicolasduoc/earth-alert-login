// app/(auth)/UserProfile.js
import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AuthContext } from './AuthContext'; // Asegúrate de que esta ruta sea correcta

const UserProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      {user ? (
        <Text style={styles.text}>Logged in as: {user.email}</Text>
      ) : (
        <Text style={styles.text}>Not logged in</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    elevation: 3,
    margin: 16,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default UserProfile;