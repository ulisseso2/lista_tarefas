import React from 'react';

import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './Tarefas.css'

import PropTypes from 'prop-types'; //instalei o prop-types

export default function Tarefas({ tarefas, handleDelete, handleEdit, index }) {

  return (
    <div>
      <ul className='tarefas'>
        {tarefas.map((tarefa, index) => (
          <li key={tarefa}>{tarefa}
            
            <span>
              <FaEdit
                className='edit'
                onClick={(e) => handleEdit(e, index)}
              />
              <FaWindowClose
                className='delete'
                onClick={(e) => handleDelete(e, index)}
              />
            </span>
          </li>//Coloquei a chave para identificar o que será comparado
        ))}
      </ul>
    </div>

  )
};

Tarefas.propTypes = {
  tarefas: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
