import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Inicio({ selectedBike, bikeImage }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleScreen}>Catálogo de Motos</Text>
      <Text style={styles.subtitleScreen}>Bienvenido al inicio de tu app</Text>
      <Image source={bikeImage} style={styles.avatar} />
      <Text style={styles.name}>{selectedBike}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
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
});