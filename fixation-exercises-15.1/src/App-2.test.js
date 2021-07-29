import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Verifica que há um campo input de email na tela', () => {
  // Acessa os elementos da sua tela
  const { getByLabelText } = render(<App />);
  const inputEmail = getByLabelText('Email');
  // Fezer seu teste
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail.type).toBe('email');
});

test('Verifica que há dois botões', () => {
  const { getAllByRole } = render(<App />);
  const button = getAllByRole('button');

  expect(button.length).toBe(2);
});

test('Verifica que há um botão \'Enviar\'', () => {
  const { getByTestId } = render(<App />);
  const button = getByTestId('id-send');

  expect(button).toBeInTheDocument();
  expect(button).toHaveValue('Enviar');
})

// Acessa os elementos da sua tela

  // Interagir com eles (se houver necessidade)

  // Fezer seu teste