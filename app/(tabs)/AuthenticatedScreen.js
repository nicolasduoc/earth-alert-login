// app/(tabs)/AuthenticatedScreen.js
import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { AuthContext } from '../(auth)/AuthContext'; // Corrige la ruta de importación

const AuthenticatedScreen = () => {
  const { user, handleAuthentication } = useContext(AuthContext);

  return (
    <View style={styles.authContainer}>
      <Text style={styles.title}>Bienvenido</Text>
      <Text style={styles.emailText}>{user.email}</Text>
      <Button title="Cerrar Sesión" onPress={() => handleAuthentication()} color="#e74c3c" />
    </View>
  );
};

const styles = StyleSheet.create({
  authContainer: {
    width: '80%',
    maxWidth: 400,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  emailText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default AuthenticatedScreen;