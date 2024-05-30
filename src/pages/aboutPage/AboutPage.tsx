import React from 'react'
import Footer from '../../components/footer/Footer'

import './AboutPage.css'

type Props = {}

const AboutPage = (props: Props) => {
	return (
		<React.Fragment>
			<div className="wrapper">
				<main>About us</main>
				<footer>
					<Footer />
				</footer>
			</div>
		</React.Fragment>
	)
}

export default AboutPage
