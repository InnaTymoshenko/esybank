import { createBrowserRouter } from 'react-router-dom'
import App from '../components/root/Root'
import HomePage from '../pages/homePage/HomePage'
import AboutPage from '../pages/aboutPage/AboutPage'
import ContactPage from '../pages/contactPage/ContactPage'
import BlogPage from '../pages/blogpage/BlogPage'
import CareersPage from '../pages/careersPage/CareersPage'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '',
				element: <HomePage />
			},
			{
				path: 'about',
				element: <AboutPage />
			},
			{
				path: 'contact',
				element: <ContactPage />
			},
			{
				path: 'blog',
				element: <BlogPage />
			},
			{
				path: 'careers',
				element: <CareersPage />
			}
		]
	}
])
