import React, { Component } from 'react'
import FormularioCadastro from './components/FormularioCadastro'
import ListaDeNotas from './components/ListaDeNotas'
import ListaDeCategorias from './components/ListaDeCategorias'
import Categorias from './dados/Categorias'
import './index.css'
import ArrayDeNotas from './dados/ArrayDeNotas'
class App extends Component {
  constructor() {
    super()
    this.categorias = new Categorias()
    this.notas = new ArrayDeNotas()
  }

  render() {
    return (
      <div className="sessao_componentes">
        <FormularioCadastro
          categorias={this.categorias.categorias}
          criarNota={this.notas.criarNota}
        />
        <section>
          <ListaDeCategorias
            adicionarCategoria={this.categorias.adicionarCategoria}
            categorias={this.categorias.categorias}
          />
        </section>
        <ListaDeNotas
          deletarNota={this.notas.apagarNota}
          notas={this.notas.notas}
        />
      </div>
    )
  }
}

export default App
