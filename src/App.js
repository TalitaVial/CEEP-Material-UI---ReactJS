import React, { Component } from 'react'
import FormularioCadastro from './components/FormularioCadastro'
import ListaDeNotas from './components/ListaDeNotas'
import ListaDeCategorias from './components/ListaDeCategorias'
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

  deletarNota(index) {
    let arrayDeNotas = this.state.notas
    arrayDeNotas.splice(index, 1)
    this.setState({ notas: arrayDeNotas })
  }

  render() {
    return (
      <div className="sessao_componentes">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <section>
          <ListaDeCategorias />
        </section>
        <ListaDeNotas
          deletarNota={this.deletarNota.bind(this)}
          notas={this.state.notas}
        />
      </div>
    )
  }
}

export default App
