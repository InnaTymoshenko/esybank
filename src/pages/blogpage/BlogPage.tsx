import React from 'react'
import Footer from '../../components/footer/Footer'

import './BlogPage.css'

type Props = {}

const BlogPage = (props: Props) => {
	return (
		<React.Fragment>
			<div className="wrapper">
				<main>Blog</main>
				<footer>
					<Footer />
				</footer>
			</div>
		</React.Fragment>
	)
}

export default BlogPage
