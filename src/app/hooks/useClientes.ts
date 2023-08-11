import { useEffect, useState } from "react"
import Cliente from "../core/Cliente"
import colecaoCliente from "../backend/db/colecaoCliente"
import clienteRepositorio from "../core/clienteRepositorio"
import useTabelaForm from "./useTabelaForm"


export default function useClientes() {

  const repo: clienteRepositorio = new colecaoCliente()

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [clientes, setClientes] = useState<Cliente[]>([])

  const { formularioVisivel, tabelaVisivel, exibirTabela, exibirformulario } = useTabelaForm()

  useEffect(obterTodos, [])

  function obterTodos(): void {
    repo.obterTodos().then(clientes => {
      setClientes(clientes)
      exibirTabela()
    })
  }

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente)
    exibirformulario()
  }

  async function clienteExcluido(cliente: Cliente) {
    await repo.excluir(cliente)
    obterTodos()
  }

  async function salvarCliente(cliente: Cliente) {
    await repo.salvar(cliente)
    obterTodos()
  }

  function novoCliente() {
    setCliente(Cliente.vazio())
    exibirformulario()
  }

  return {
    cliente,
    clientes,
    salvarCliente,
    novoCliente,
    clienteExcluido,
    clienteSelecionado,
    obterTodos,
    tabelaVisivel,
    exibirTabela,
  }

}

