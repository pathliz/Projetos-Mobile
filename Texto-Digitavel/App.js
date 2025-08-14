import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import * as Print from 'expo-print';

export default function App() {
  const [texto, setTexto] = useState('');

  const imprimir = async () => {
    await Print.printAsync({
      html: `<html><body><p>${texto}</p></body></html>`
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite seu texto"
        value={texto}
        onChangeText={setTexto}
        multiline
      />
      <Button title="Imprimir" onPress={imprimir} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20
  },
  input: {
    height: 150,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    textAlignVertical: 'top'
  }
});
