import React from 'react'
import Footer from '../Footer'

function MainContent() {
	return(
		<div>
			<h1 className="title">Get More Done.</h1>
			<h1 className="title-2">While Having Fun.</h1>
			<p className="home-p">Collaborate with your team</p>
			<p className="home-2">to solve tricky bugs 🐞 and conquer</p>
			<p className="home-3">those high priority tickets. 🧑🏾‍💻</p>
			<img className="icon-set" src="https://i.imgur.com/JGNKQmJ.png" alt="people-set" />
			<Footer />
		</div>
	)
}

export default MainContent