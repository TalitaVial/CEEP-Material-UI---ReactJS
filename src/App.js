import React, { Component } from 'react'
import FormularioCadastro from './components/FormularioCadastro'
import ListaDeNotas from './components/ListaDeNotas'
import ListaDeCategorias from './components/ListaDeCategorias'
import './index.css'
class App extends Component {
  constructor() {
    super()
    this.state = {
      notas: [],
      categorias: []
    }
  }

  criarNota(titulo, texto, categoria) {
    const novaNota = { titulo, texto, categoria }
    const ArrayDeNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas: ArrayDeNotas
    }
    this.setState(novoEstado)
  }

  adicionarCategoria(nomeCategoria) {
    const novaCategoria = [...this.state.categorias, nomeCategoria]
    const novoEstado = { ...this.state, categorias: novaCategoria }
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
        <FormularioCadastro
          categorias={this.state.categorias}
          criarNota={this.criarNota.bind(this)}
        />
        <section>
          <ListaDeCategorias
            adicionarCategoria={this.adicionarCategoria.bind(this)}
            categorias={this.state.categorias}
          />
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
