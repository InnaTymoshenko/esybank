import React from 'react'
import Footer from '../../components/footer/Footer'

import './CareersPage.css'

type Props = {}

const CareersPage = (props: Props) => {
	return (
		<React.Fragment>
			<div className="wrapper">
				<main>Careers</main>
				<footer>
					<Footer />
				</footer>
			</div>
		</React.Fragment>
	)
}

export default CareersPage
