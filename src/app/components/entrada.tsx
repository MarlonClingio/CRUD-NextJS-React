interface entradaProps {
  tipo?: 'text' | 'number'
  texto: string
  valor: any
  somenteLeitura?: boolean
  className: string
  onChange?: (valor: any) => void
}

export default function Entrada(props: entradaProps) {
  return (
    <div className={`flex flex-col ${props.className}`}>
      <label className="mb-2 font-semibold">
        {props.texto}
      </label>
      <input
        type={props.tipo ?? 'text'}
        value={props.valor}
        readOnly={props.somenteLeitura}
        onChange={e => props.onChange?.(e.target.value)}
        className={`
          border border-purple-500 rounded-lg
          bg-purple-50
          focus:outline-none focus:bg-purple-200
          px-4 py-2
        `}
      />
    </div>
  )
}