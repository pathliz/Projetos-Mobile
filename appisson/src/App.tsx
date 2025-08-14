// App.js
import React, { useEffect, useState } from "react";
import { View, Text, Button, FlatList, Linking, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useColorScheme } from "react-native";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";

SplashScreen.preventAutoHideAsync();

// Simulação de consultas do SISREG
const consultasFake = [
  { id: "1", especialidade: "Cardiologia", data: "20/08/2025", hora: "14:00", telefone: "55999999999" },
  { id: "2", especialidade: "Ortopedia", data: "25/08/2025", hora: "09:30", telefone: "55988888888" },
];

export default function App() {
  const colorScheme = useColorScheme();
  const [consultas, setConsultas] = useState(consultasFake);

  // Configuração inicial do Splash e Notificações
  useEffect(() => {
    const prepare = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      await SplashScreen.hideAsync();
      await registerForPushNotificationsAsync();
    };
    prepare();
  }, []);

  // Função para enviar notificação local
  const enviarNotificacao = async (consulta) => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Lembrete de Consulta 🩺",
        body: `${consulta.especialidade} - ${consulta.data} às ${consulta.hora}`,
        sound: true,
      },
      trigger: { seconds: 2 }, // dispara em 2s
    });
  };

  // Abrir WhatsApp
  const abrirWhatsApp = (consulta) => {
    const msg = `Olá! Gostaria de confirmar minha consulta de ${consulta.especialidade} marcada para ${consulta.data} às ${consulta.hora}.`;
    const url = `https://wa.me/${consulta.telefone}?text=${encodeURIComponent(msg)}`;
    Linking.openURL(url);
  };

  return (
    <ImageBackground
      source={require("./assets/sisregPoliclinica.jpeg")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.titulo}>Minhas Consultas</Text>
        <FlatList
          data={consultas}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.texto}>{item.especialidade}</Text>
              <Text style={styles.texto}>📅 {item.data} ⏰ {item.hora}</Text>
              <View style={styles.botoes}>
                <TouchableOpacity style={styles.botao} onPress={() => abrirWhatsApp(item)}>
                  <Text style={styles.botaoTexto}>WhatsApp</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botaoNotificacao} onPress={() => enviarNotificacao(item)}>
                  <Text style={styles.botaoTexto}>Notificar</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
    </ImageBackground>
  );
}

// Permissão para notificações
async function registerForPushNotificationsAsync() {
  if (!Constants.isDevice) {
    alert("Notificações só funcionam em dispositivos físicos");
    return;
  }
  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;
  if (existingStatus !== "granted") {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }
  if (finalStatus !== "granted") {
    alert("Permissão para notificações negada!");
    return;
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "rgba(255,255,255,0.9)",
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
  },
  texto: {
    fontSize: 16,
    marginBottom: 5,
  },
  botoes: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  botao: {
    backgroundColor: "#25D366",
    padding: 10,
    borderRadius: 5,
  },
  botaoNotificacao: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
  },
  botaoTexto: {
    color: "#fff",
    fontWeight: "bold",
  },
});
