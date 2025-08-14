import React, {useState} from 'react';
import { StyleSheet, Text, View , Button} from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0);

  return (
    <View style={styles.container}>
      <Text style = {styles.texto}> Você clicou {contador} vezes!</Text>

  <Button
  title = "Clique aqui"
  onPress={()=> setContador (contador+1)}
/>
</View>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c79fcaff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
