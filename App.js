import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Inicio from './components/Inicio';
import Perfil from './components/Perfil';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('profile');
  const [selectedBike] = useState('KTM Duke 200 NG');
  const [bikeImage] = useState(require('./assets/duke200.jpg'));

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {currentScreen === 'profile' ? (
          <Perfil bikeImage={bikeImage} />
        ) : (
          <Inicio selectedBike={selectedBike} bikeImage={bikeImage} />
        )}
      </ScrollView>

      {/* Botones inferiores requeridos */}
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
    paddingBottom: 100,
    alignItems: 'center',
    justifyContent: 'center',
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