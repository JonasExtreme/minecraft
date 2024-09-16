import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const Contato = () => {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Contato</Text>
      <Text style={estilos.info}>jonasemail.@gmarço,gov</Text>
      <Link href="/" style={estilos.link}>Voltar para Início</Link>
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 16,
    marginVertical: 10,
  },
  link: {
    fontSize: 18,
    color: 'blue',
    marginVertical: 10,
  },
});

export default Contato;
