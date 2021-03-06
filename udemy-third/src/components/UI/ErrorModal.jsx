import React from 'react';
import Button from './Button';

import Card from './Card';
import './ErrorModal.scss';

const ErrorModal = ({ title, message, onConfirm }) => {
  return (
    <>
      <div className='backdrop' onClick={onConfirm}/>
      <Card className='modal'>
        <header className='header'>
          <h2>{title}</h2>
        </header>
        <div className='content'>
          <p>{message}</p>
        </div>
        <footer className='actions'>
          <Button onClick={onConfirm}>Okay</Button>
        </footer>
      </Card>
    </>
  );
};

export default ErrorModal;
