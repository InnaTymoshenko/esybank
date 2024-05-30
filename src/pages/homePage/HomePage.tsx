import React from 'react'
import Main from '../../components/main/Main'
import Footer from '../../components/footer/Footer'

import './HomePage.css'

const HomePage = () => {
	return (
		<React.Fragment>
			<div className="wrapper">
				<main>
					<Main />
				</main>
				<footer>
					<Footer />
				</footer>
			</div>
		</React.Fragment>
	)
}

export default HomePage
