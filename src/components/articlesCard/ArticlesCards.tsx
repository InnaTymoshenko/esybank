import { articles } from '../../data'
import Articlecard from './articlecard/Articlecard'

import './ArticlesCards.css'

const ArticlesCards = () => {
	return (
		<div className="articles-block">
			{articles?.map((article, i) => {
				return (
					<div key={i} className="articles-card">
						<Articlecard article={article} className="article-image" />
					</div>
				)
			})}
		</div>
	)
}

export default ArticlesCards
