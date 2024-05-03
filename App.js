import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { createUserWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from './src/services/firebaseConfig';

export default function App() {
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')

  function cadastrar () {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
      console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    console.log(errorMessage)
  });
  }

  async function forgotPassword () {
    //console.log('Reset de senha enviado para' + email)
    await sendPasswordResetEmail(auth, email)
    .then(() => {
      alert('Reset de senha enviado para' + email)
      // Password reset email sent!
      // ..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    console.log(errorMessage)
  });
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Enter your email'      
        value={email}
        onChangeText={(value) => setEmail(value)}
      />

      <TextInput
        placeholder='Enter your password'
        value={password}      
        onChangeText={(value) => setPassword(value)}
      />

      <TouchableOpacity onPress={cadastrar}>
        <Text>Submit</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={cadastrar}>
        <Text>forgot the password</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
