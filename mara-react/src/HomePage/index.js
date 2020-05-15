import React from 'react'
import MainContent from '../MainContent'
import Footer from '../Footer'


function HomePage() {
	const styles = {
    color: "#E78200", 
    backgroundColor: "white",
    
  }

  const stylesTwo = {
  	height: 50,
  	width: 50
  }
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


