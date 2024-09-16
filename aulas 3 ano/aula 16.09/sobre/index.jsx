import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const Inicio = () => {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Bem-vindo ao Meu App Pessoal!</Text>
      <Text style={estilos.descricao}>Aqui estão algumas informações sobre mim:</Text>
      <Link href="/info" style={estilos.link}>Informações</Link>
      <Link href="/contato" style={estilos.link}>Contato</Link>
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
  descricao: {
    fontSize: 16,
    marginVertical: 10,
  },
  link: {
    fontSize: 18,
    color: 'blue',
    marginVertical: 10,
  },
});

export default Inicio;
