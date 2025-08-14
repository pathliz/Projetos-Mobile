import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ImageBackground , TextInput} from 'react-native';

export default function App() {
  return (
    <ImageBackground
      source={require('C:/Projetos/primeiro-app/patricia.png')} // caminho da imagem
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.titulo}>Patricia!</Text>
        <StatusBar style="auto" />
        <Button
          title="clique aqui"
          onPress={() => alert('botão pressionado')}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // cobre toda a tela
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 45,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
});
