import { View, Text, StyleSheet, TouchableOpacity, useColorScheme } from 'react-native'
import React, { useState } from 'react'
import TodoList from './src/components/TodoList'

const App = () => {
  const systemColorScheme = useColorScheme() // Detecta o tema atual do sistema
  const [theme, setTheme] = useState(systemColorScheme) // Estado para armazenar o tema atual

  // Alterna o tema entre claro e escuro
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
  }

  // Define estilos com base no tema
  const styles = theme === 'dark' ? darkStyles : lightStyles

  return (  
    <View style={styles.container}>
      <View style={styles.header}> 
        <Text style={styles.title}>
          MINHA LISTA TO-DO
        </Text>
        <TouchableOpacity onPress={toggleTheme} style={styles.themeButton}>
          <Text style={styles.themeButtonText}>
            {theme === 'dark' ? '🌞' : '🌜'}
          </Text>
        </TouchableOpacity>
      </View>
      <TodoList theme={theme} Tarefas={'Tarefas'} />
    </View>
  )
}

// Estilos para modo claro
const lightStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Fundo branco para modo claro
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f8f8', // Fundo claro para o cabeçalho
  },
  title: {
    fontFamily: 'Arial',
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
  themeButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#ddd', // Fundo claro para o botão no modo claro
  },
  themeButtonText: {
    fontSize: 18,
  },
})

// Estilos para modo escuro
const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333', // Fundo cinza escuro para modo escuro
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#444', // Fundo escuro para o cabeçalho
  },
  title: {
    fontFamily: 'Arial',
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  themeButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#555', // Fundo escuro para o botão no modo escuro
  },
  themeButtonText: {
    fontSize: 18,
  },
})

export default App