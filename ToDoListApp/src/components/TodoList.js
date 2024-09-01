import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'

const TodoList = ({ theme, Tarefas }) => {
  const [tarefa, setTarefa] = useState("")
  const [tarefasList, setTarefasList] = useState([])

  const adicionaTarefa = () => {
    if (tarefa !== "") {
      setTarefasList([...tarefasList, tarefa])
      setTarefa("")
    }
  }

  const styles = theme === 'dark' ? darkStyles : lightStyles

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={tarefa}
        onChangeText={setTarefa}
        placeholder='Digite a sua proxima tarefa'
        placeholderTextColor={theme === 'dark' ? '#ccc' : '#888'} 
      />
      <Button title="Adicionar Tarefa" onPress={adicionaTarefa} />
      
      <Text style={styles.listTitle}>Lista de {Tarefas}</Text>
      
      <ScrollView style={styles.listContainer}>
        {
          tarefasList.map((item, index) => (
            <Text key={index} style={styles.listItem}>{item}</Text>
          ))
        }
      </ScrollView>
    </View>
  )
}

// Estilos para modo claro
const lightStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: '#fff', // Fundo branco para modo claro
  },
  input: {
    width: '80%',
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    color: '#000', // Texto preto para modo claro
  },
  listTitle: {
    marginTop: 30,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000', // Texto preto para modo claro
  },
  listContainer: {
    marginTop: 10,
    width: '80%',
    maxHeight: '50%',
  },
  listItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    color: '#000', // Texto preto para modo claro
  },
})

// Estilos para modo escuro
const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: '#333', // Fundo cinza escuro para modo escuro
  },
  input: {
    width: '80%',
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    color: '#fff', // Texto branco para modo escuro
  },
  listTitle: {
    marginTop: 30,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff', // Texto branco para modo escuro
  },
  listContainer: {
    marginTop: 10,
    width: '80%',
    maxHeight: '50%',
  },
  listItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#555',
    color: '#fff', // Texto branco para modo escuro
  },
})

export default TodoList