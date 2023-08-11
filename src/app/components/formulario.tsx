import { useState } from "react"
import Cliente from "../core/Cliente"
import Entrada from "./entrada"
import Botao from "./botao"

interface formularioProps {
  cliente: Cliente
  clienteMudou?: (cliente: Cliente) => void
  cancelado?: () => void
}

export default function Formulario(props: formularioProps) {
  const id = props.cliente?.id
  const [nome, setNome] = useState(props.cliente?.nome ?? '')
  const [idade, setIdade] = useState(props.cliente?.idade ?? 0)
  return (
    <div>
      {id ? (
        <Entrada texto="Código:" valor={id} somenteLeitura className="mb-4" />
      ) : false}
      <Entrada texto="Nome:" valor={nome} onChange={setNome} className="mb-4" />
      <Entrada texto="Idade:" tipo="number" valor={idade} onChange={setIdade} className="mb-4" />

      <div className="flex justify-end mt-5">
        <Botao
          cor="blue"
          className="mr-2 hover:opacity-80"
          onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}
        >
          {id ? 'Alterar' : 'Salvar'}
        </Botao>
        <Botao cor="gray" className="hover:opacity-80" onClick={props.cancelado}>
          Cancelar
        </Botao>
      </div>
    </div>
  )
}