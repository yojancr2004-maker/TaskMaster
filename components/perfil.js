import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Perfil({ bikeImage }) {
  return (
    <View style={styles.container}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
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
});