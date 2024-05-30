import './Button.css'

type Props = {
	text: string
}

const Button = (props: Props) => {
	return <button className="btn">{props.text}</button>
}

export default Button
