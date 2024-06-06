import React from 'react'
import { IArticle } from '../../../types/articlesTypes'
import { Link } from 'react-router-dom'

type Props = {
	article: IArticle
	className: string
}

const Articlecard = ({ article, className }: Props) => {
	return (
		<React.Fragment>
			<div className={className} style={{ backgroundImage: `url(${article.image})` }}></div>
			<div>
				<span>By {article.author}</span>
				<h3>
					<Link to={'blog'}>{article.title}</Link>
				</h3>

				<p>{article.description}</p>
			</div>
		</React.Fragment>
	)
}

export default Articlecard
