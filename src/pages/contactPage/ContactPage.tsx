import React from 'react'
import Footer from '../../components/footer/Footer'

import './ContactPage.css'

type Props = {}

const ContactPage = (props: Props) => {
	return (
		<React.Fragment>
			<div className="wrapper">
				<main>Contact us</main>
				<footer>
					<Footer />
				</footer>
			</div>
		</React.Fragment>
	)
}

export default ContactPage
