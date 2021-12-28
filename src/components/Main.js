import React, {Component} from 'react';
import './Main.css'

import { FaPlus } from 'react-icons/fa'
import { FaEdit, FaWindowClose} from 'react-icons/fa'

//Criando estados

export default class Main extends Component {
  state = { //aqui eu crio os estados da minha aplicação
    novaTarefa:'',

    tarefas: [
      'fazer café',
      'Beber Agua',
      'comer'
    ],
  }

  handleChange = (e) => {  //para modificar um estado eu preciso usar o setState do React
    this.setState({ //Usei uma arrow function para não precisar declarar o bind do this do método
      novaTarefa: e.target.value,
    });
  }

  render(){
    const { novaTarefa } = this.state;

    return (
      <div className='main'>
        <h1>Lista de Tarefas</h1>

        <form action="#" className='form'>
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
          {tarefas.map((tarefa) => (
            <li key = {tarefa}>
              <div>
                <FaEdit />
                <FaWindowClose />
              </div>
            </li>
          ))}

        </ul>
      </div>
    );
  }

}

