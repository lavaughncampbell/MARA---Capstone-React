// import React from "react";
// import FadeIn from "react-fade-in";
// import Lottie from "react-lottie";
// import ReactLoading from "react-loading";
// import "bootstrap/dist/css/bootstrap.css";
// import '../App.css'; 

// export default class Loading extends React.Component {
// 	constructor(props) {
// 		super(props); 
// 		this.state = {
// 			done: undefined
// 		}; 
// 	}


// 	componentDidMount() {
// 		setTimeout(() => {
// 			fetch("https://jsonplaceholder.typicode.com/posts")
// 			.then(response => response.json())
// 			.then(json => this.setState({ done: true })); 
// 		}, 1200); 
// 	}

// 	render() {
//     return (
//       <div>
//         {!this.state.done ? (
//           <ReactLoading type={"bars"} color={"white"} />
//         ) : (
//         <div className="App-Loading">
//           <img src="/images/mara-logo.png" alt="" /> 
//         </div>
//         )}
//       </div>
//     );
//   }
// }