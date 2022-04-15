import React, { Component } from 'react'
import FormularioCadastro from './components/FormularioCadastro'
import ListaDeNotas from './components/ListaDeNotas'
import './index.css'
class App extends Component {
  constructor() {
    super()
    this.state = {
      notas: []
    }
  }

  criarNota(titulo, texto) {
    const novaNota = { titulo, texto }
    const ArrayDeNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas: ArrayDeNotas
    }
    this.setState(novoEstado)
  }

  render() {
    return (
      <div className="sessao_componentes">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <ListaDeNotas notas={this.state.notas} />
      </div>
    )
  }
}

export default App
