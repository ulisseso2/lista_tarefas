import React, {Component} from 'react';
import './Main.css';

import { FaPlus } from 'react-icons/fa';
import { FaEdit, FaWindowClose} from 'react-icons/fa';

//Criando estados

export default class Main extends Component {
  state = { //aqui eu crio os estados dos componentes da minha aplicação
    novaTarefa:'',
    tarefas: [],
    index: -1,
  };

  handleSubmit = (e) => {
    e.preventDefault()
    const { tarefas, index } = this.state;
    let { novaTarefa } = this.state;

    novaTarefa = novaTarefa.trim();

    if (tarefas.indexOf(novaTarefa) !== -1) return;

    const novasTarefas = [...tarefas];

    if (index === -1){
      this.setState({
        tarefas: [...novasTarefas, novaTarefa],
        novaTarefa:'',
      });

    }else {
      novasTarefas[index] = novaTarefa;

      this.setState({
        tarefas: [...novasTarefas],
        index: -1,
      });
    }
  }

  handleEdit = (e, index) => {
    const { tarefas } = this.state;
    this.setState({
      index,
      novaTarefa: tarefas[index],

    });
  }

  handleDelete = (e, index) => {
    const { tarefas } = this.state; //peguei o tarefas do state
    const novasTarefas = [ ...tarefas]; //criei uma constante e usei spread para separalas
    novasTarefas.splice(index, 1); // deste spread eu apaguei "splice" a partir do index 1 elemento

    this.setState({
      tarefas: [...novasTarefas]
    }); // mudei o state de tarefas para o novo spread sem o elemento excluido
  }

  handleChange = (e) => {  //para modificar um estado eu preciso usar o setState do React
    this.setState({ //Usei uma arrow function para não precisar declarar o bind do this do método
      novaTarefa: e.target.value,
    });
  };

  render(){
    const { novaTarefa, tarefas } = this.state;

    return (
      <div className='main'>
        <h1>Lista de Tarefas</h1>

        <form onSubmit={this.handleSubmit} action="#" className='form'>
          <input
            onChange = {this.handleChange}
            type="text"
            value= {novaTarefa}
          />
          <button type='submit'>
            <FaPlus/>
          </button>
        </form>

        <ul className='tarefas'>
          {tarefas.map((tarefa, index) => (
            <li key = {tarefa}>{tarefa}
              <span>
                <FaEdit
                  className='edit'
                  onClick={(e) => this.handleEdit(e, index)}

                />
                <FaWindowClose
                  className='delete'
                  onClick={(e) => this.handleDelete(e, index)}
                />
              </span>
            </li>//Coloquei a chave para identificar o que será comparado
          ))}

        </ul>
      </div>
    );
  }

}

