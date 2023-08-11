'use client';
import Botao from './components/botao';
import Formulario from './components/formulario';
import Layout from './components/layout'
import Tabela from './components/tabela'
import useClientes from './hooks/useClientes';

export default function Home() {

  const { cliente, clientes, clienteSelecionado, clienteExcluido, novoCliente, salvarCliente, tabelaVisivel, exibirTabela } = useClientes()

  return (
    <div className='flex h-screen justify-center items-center'>
      <Layout titulo="Cadastro CRUD Completo">
        {tabelaVisivel ? (
          <>
            <div className='flex justify-end'>
              <Botao
                cor='green'
                className='-mt-2 mb-4'
                onClick={novoCliente}
              >
                Novo Cliente
              </Botao>
            </div>
            <Tabela
              cliente={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
            />
          </>
        ) : (
          <Formulario
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={exibirTabela}
          />
        )}
      </Layout>
    </div>
  )
}
