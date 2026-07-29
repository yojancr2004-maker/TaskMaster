import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('profile');
  const [selectedBike, setSelectedBike] = useState('KTM Duke 200 NG');
  const [bikeImage, setBikeImage] = useState(require('./assets/duke200.jpg'));

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      {/* Contenido dinámico según la pantalla activa */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {currentScreen === 'profile' ? (
          <>
            <Image source={bikeImage} style={styles.avatar} />
            <Text style={styles.name}>Yojan Castañeda</Text>

            <View style={styles.card}>
              <Text style={styles.cardTitle}>CONTACTO</Text>
              <Text style={styles.cardText}>Yojancr2004@gmail.com</Text>
            </View>

            <View style={styles.card}>
              <Text style={styles.cardTitle}>Numero personal</Text>
              <Text style={styles.cardText}>3102384470</Text>
            </View>
          </>
        ) : (
          <>
            <Text style={styles.titleScreen}>Catálogo de Motos</Text>
            <Text style={styles.subtitleScreen}>Bienvenido al inicio de tu app</Text>
            <Image source={bikeImage} style={styles.avatar} />
            <Text style={styles.name}>{selectedBike}</Text>
          </>
        )}
      </ScrollView>

      {/* Botones de navegación inferiores pedidos por el profesor */}
      <View style={styles.navContainer}>
        <TouchableOpacity 
          style={[styles.navButton, currentScreen === 'profile' && styles.activeButton]} 
          onPress={() => setCurrentScreen('profile')}
        >
          <Text style={styles.navText}>Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.navButton, currentScreen === 'home' && styles.activeButton]} 
          onPress={() => setCurrentScreen('home')}
        >
          <Text style={styles.navText}>Inicio</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 100, // Espacio para que el contenido no quede debajo de los botones
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 3,
    borderColor: '#ff6600',
    marginBottom: 15,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 12,
    color: '#666',
    fontWeight: '600',
  },
  cardText: {
    fontSize: 16,
    color: '#ff6600',
    fontWeight: 'bold',
    marginTop: 5,
  },
  titleScreen: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ff6600',
    marginBottom: 10,
  },
  subtitleScreen: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  navContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 65,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    elevation: 10,
  },
  navButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeButton: {
    borderTopWidth: 3,
    borderTopColor: '#ff6600',
    backgroundColor: '#fff5ec',
  },
  navText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});