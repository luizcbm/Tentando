import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function FilmeScreen() {
  const [query, setQuery] = useState('');
  const [filmes, setFilmes] = useState([]);

  async function buscarFilmes() {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=SUA_API_KEY&language=pt-BR&query=${query}`,
    );
    const data = await response.json();
    setFilmes(data.results);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Busca de Filmes</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o nome do filme"
        value={query}
        onChangeText={setQuery}
      />
      <TouchableOpacity style={styles.button} onPress={buscarFilmes}>
        <Text style={styles.buttonText}>Buscar</Text>
      </TouchableOpacity>
      {filmes.map((filme) => (
        <View key={filme.id} style={styles.filmeContainer}>
          <Text style={styles.filmeTitle}>{filme.title}</Text>
          <Text style={styles.filmeOverview}>{filme.overview}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#eee',
    borderRadius: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    fontSize: 18,
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#f4511e',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  filmeContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  filmeTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  filmeOverview: {
    fontSize: 16,
  },
});
