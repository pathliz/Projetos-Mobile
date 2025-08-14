import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking, ImageBackground } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function App() {
  return (
    <ImageBackground
      source={require('C:/Projetos/mobile/perfil/fundo.jpeg')} // Coloque a imagem dentro da pasta assets
      style={styles.background}
    >
      <View style={styles.container}>
        {/* Foto de perfil */}
        <Image
          source={require('C:/Projetos/mobile/perfil/patricia.jpeg')}
          style={styles.profileImage}
        />

        {/* Nome e título */}
        <Text style={styles.name}>Patricia Lopes</Text>
        <Text style={styles.role}>Estudante de Engenharia de Software 
          Formada em Engenharia de Materiais, efetiva na Prefeitura Municipal de Parauapebas </Text>


        {/* Ícones sociais */}
        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={() => Linking.openURL("https://github.com/")}>
            <AntDesign name="github" size={28} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => Linking.openURL("https://linkedin.com/")}>
            <AntDesign name="linkedin-square" size={28} color="#0e76a8" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => Linking.openURL("https://instagram.com/")}>
            <AntDesign name="instagram" size={28} color="#E1306C" />
          </TouchableOpacity>
        </View>

        

        {/* Botão */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Mostrar Detalhes</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover"
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 30
    // Sem backgroundColor para deixar a imagem aparecer
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 75,
    marginBottom: 15
  },
  name: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#e7eb0aff"
  },
  role: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    color: "#050505ff",
    marginBottom: 15
  },
  iconsContainer: {
    flexDirection: "row",
    marginBottom: 15,
    gap: 15
  
  },
  button: {
    backgroundColor: "rgba(219,201,221,0.8)", // cor com transparência
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16
  }
});
