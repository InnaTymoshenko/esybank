import api from '../images/icon-api.svg'
import budget from '../images/icon-budgeting.svg'
import online from '../images/icon-online.svg'
import onboard from '../images/icon-onboarding.svg'
import money from '../images/image-currency.jpg'
import restaurant from '../images/image-restaurant.jpg'
import plane from '../images/image-plane.jpg'
import confetti from '../images/image-confetti.jpg'

export const services = [
	{
		title: 'Online Banking',
		image: online,
		description:
			'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.'
	},
	{
		title: ' Simple Budgeting',
		image: budget,
		description:
			'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.'
	},
	{
		title: 'Fast Onboarding',
		image: onboard,
		description:
			'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.'
	},
	{
		title: 'Open API',
		image: api,
		description:
			'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.'
	}
]

export const articles = [
	{
		title: 'Receive money in any currency with no fees',
		image: money,
		author: 'Claire Robinson',
		description: `The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single … `
	},
	{
		title: 'Treat yourself without worrying about money',
		image: restaurant,
		author: 'Wilson Hutton',
		description: ` Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …`
	},
	{
		title: 'Take your Easybank card wherever you go',
		image: plane,
		author: 'Wilson Hutton',
		description: `We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …`
	},
	{
		title: 'Our invite-only Beta accounts are now live!',
		image: confetti,
		author: 'Claire Robinson',
		description: `After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...`
	}
]
