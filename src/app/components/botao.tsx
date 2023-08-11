interface botaoProps {
  cor?: 'green' | 'blue' | 'gray'
  className?: string
  children: any
  onClick?: () => void
}

export default function Botao(props: botaoProps) {
  const cor = props.cor ?? 'gray'
  return (
    <button onClick={props.onClick} className={`
      bg-gradient-to-r from-${cor}-500 to-${cor}-700 
      text-white px-4 py-2 rounded-md hover:opacity-80
      ${props.className}
    `}>
      {props.children}
    </button>
  )
}