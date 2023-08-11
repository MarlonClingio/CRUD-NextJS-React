import { useState } from 'react';

export default function useTabelaForm() {
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  const exibirTabela = () => {
    setVisivel('tabela')
  }

  const exibirformulario = () => {
    setVisivel('form')
  }

  return {
    formularioVisivel: visivel === 'form',
    tabelaVisivel: visivel === 'tabela',
    exibirTabela,
    exibirformulario,
  }
}