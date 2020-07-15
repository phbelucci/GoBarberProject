import React from 'react';
import {Container, Toast} from './styles';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi'

const ToastContainer: React.FC = () => {
  return (
    <Container>
        <Toast type="info" hasDescription>
          <FiAlertCircle size={20}/>
          <div>
            <strong>Erro</strong>
            <p>Nao foi possivel erro</p>
          </div>

          <button type="button">
            <FiXCircle size={18}/>
          </button>
        </Toast>

        <Toast type="success" hasDescription={false}>
          <FiAlertCircle size={20}/>
          <div>
            <strong>Erro</strong>
          </div>

          <button type="button">
            <FiXCircle size={18}/>
          </button>
        </Toast>

        <Toast type="error" hasDescription>
          <FiAlertCircle size={20}/>
          <div>
            <strong>Erro</strong>
            <p>Nao foi possivel erro</p>
          </div>

          <button type="button">
            <FiXCircle size={18}/>
          </button>
        </Toast>


    </Container>
  )
}

export default ToastContainer;
