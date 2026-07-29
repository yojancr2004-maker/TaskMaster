import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('profile');
  const [selectedBike, setSelectedBike] = useState('KTM Duke 200 NG');
  const [bikeImage, setBikeImage] = useState(require('./assets/duke200.jpg'));

  // Pantalla 1: Tu Perfil (Sin la tarjeta de "MOTO SELECCIONADA", pero guardando la lógica interna)
  if (currentScreen === 'profile') {
    return (
      <View style={styles.container}>
        <Image source={bikeImage} style={styles.avatar} />

        <Text style={styles.name}>Yojan Castañeda</Text>

        {/* Tarjeta de contacto */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>CONTACTO</Text>
          <Text style={styles.cardText}>Yojancr2004@gmail.com</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Numero personal</Text>
          <Text style={styles.cardText}>3102384470</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => setCurrentScreen('catalog')}>
          <Text style={styles.buttonText}>Catalogo Naked</Text>
        </TouchableOpacity>

        <StatusBar style="dark" />
      </View>
    );
  }

  // Pantalla 2: Catálogo de Selección de Motos
  return (
    <ScrollView contentContainerStyle={styles.catalogContainer}>
      <Text style={styles.catalogHeader}>SELECCIONA TU MODELO</Text>
      
      {/* Tarjeta 1 */}
      <View style={styles.bikeCard}>
        <Image source={require('./assets/duke200.jpg')} style={styles.bikeImage} />
        <Text style={styles.bikeTitle}>2026 KTM DUKE 200 NG</Text>
        <Text style={styles.bikeSubtitle}>THE STREET WARRIOR</Text>
        <TouchableOpacity 
          style={styles.modelButton} 
          onPress={() => {
            setSelectedBike('KTM Duke 200 NG');
            setBikeImage(require('./assets/duke200.jpg'));
            setCurrentScreen('profile');
          }}>
          <Text style={styles.modelButtonText}>PÁGINA DEL MODELO</Text>
        </TouchableOpacity>
      </View>

      {/* Tarjeta 2 */}
      <View style={styles.bikeCard}>
        <Image source={require('./assets/duke990.jpg')} style={styles.bikeImage} />
        <Text style={styles.bikeTitle}>2026 KTM 990 DUKE</Text>
        <Text style={styles.bikeSubtitle}>THE SNIPER</Text>
        <TouchableOpacity 
          style={styles.modelButton} 
          onPress={() => {
            setSelectedBike('KTM Duke 200 NG');
            setBikeImage(require('./assets/duke990.jpg'));
            setCurrentScreen('profile');
          }}>
          <Text style={styles.modelButtonText}>PÁGINA DEL MODELO</Text>
        </TouchableOpacity>
      </View>

      {/* Tarjeta 3 */}
      <View style={styles.bikeCard}>
        <Image source={require('./assets/duke390.jpg')} style={styles.bikeImage} />
        <Text style={styles.bikeTitle}>2026 KTM 390 DUKE</Text>
        <Text style={styles.bikeSubtitle}>THE CORNER ROCKET</Text>
        <TouchableOpacity 
          style={styles.modelButton} 
          onPress={() => {
            setSelectedBike('KTM Duke 390');
            setBikeImage(require('./assets/duke390.jpg'));
            setCurrentScreen('profile');
          }}>
          <Text style={styles.modelButtonText}>PÁGINA DEL MODELO</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.backButton} onPress={() => setCurrentScreen('profile')}>
        <Text style={styles.backButtonText}>← Volver al Perfil</Text>
      </TouchableOpacity>

      <StatusBar style="light" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 4,
    borderColor: '#ff6600',
    marginBottom: 20,
    backgroundColor: '#000000',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#f1f5f9',
    width: '100%',
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#cbd5e1',
  },
  cardTitle: {
    fontSize: 10,
    color: '#64748b',
    marginBottom: 3,
    letterSpacing: 1,
    fontWeight: 'bold',
  },
  cardText: {
    fontSize: 14,
    color: '#ff6600',
    fontWeight: '700',
  },
  button: {
    backgroundColor: '#ff6600',
    width: '100%',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  catalogContainer: {
    paddingVertical: 50,
    paddingHorizontal: 20,
    backgroundColor: '#121212',
    alignItems: 'center',
  },
  catalogHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 25,
    letterSpacing: 1,
  },
  bikeCard: {
    backgroundColor: '#1e1e1e',
    width: '100%',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#333333',
  },
  bikeImage: {
    width: 240,
    height: 140,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  bikeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 5,
  },
  bikeSubtitle: {
    fontSize: 12,
    color: '#ff6600',
    fontWeight: 'bold',
    marginBottom: 15,
    letterSpacing: 1,
  },
  modelButton: {
    backgroundColor: '#ff6600',
    width: '100%',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  modelButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  backButton: {
    marginTop: 10,
    padding: 15,
  },
  backButtonText: {
    color: '#94a3b8',
    fontSize: 14,
    fontWeight: 'bold',
  },
});