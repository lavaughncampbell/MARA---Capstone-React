import React from 'react'
import MainContent from '../MainContent'
import Footer from '../Footer'


function HomePage() {
	return(
		<div className="Header">
			<nav>
				<img className="logo" src="https://i.imgur.com/uOdAgES.png" alt="" />
				<img className="logo-mara" src="https://i.imgur.com/8n4uCYZ.png" alt="" />
				<a className="nav-login" href="">Log in</a>
				<a className="nav-signup" href="">Sign Up</a>
			</nav>
			<MainContent />
		</div>

	)
}

export default HomePage


