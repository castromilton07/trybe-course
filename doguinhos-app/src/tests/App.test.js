import React from 'react';
import fetchMock from 'fetch-mock-jest';
import { fireEvent, waitFor } from '@testing-library/react'
import renderWithRedux from './helpers';
import App from '../App';

describe('Página principal', () => {
  test('Testa que o botão de adicionar cachorro está presente', async () => {
    const { queryByText } = renderWithRedux(<App />);
    const buttonDoguinho = queryByText('Novo Doguinho');

    expect(buttonDoguinho).toBeInTheDocument();

    fetchMock.getOnce('https://dog.ceo/api/breeds/image/random', {
      body: { message: 'myDogUrl' },
    });

    fireEvent.click(buttonDoguinho);
    await waitFor(() => expect(fetchMock.called()).toBeTruthy());
    
  });
});
