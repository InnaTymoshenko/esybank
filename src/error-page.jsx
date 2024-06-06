import { useRouteError, Link } from 'react-router-dom'
import Button from './components/button/Button'

import './index.css'

export default function ErrorPage() {
	const error = useRouteError()

	return (
		<div id="error-page">
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
			<Link to={'..'} relative="path">
				<Button text="Go Back" />
			</Link>
		</div>
	)
}
