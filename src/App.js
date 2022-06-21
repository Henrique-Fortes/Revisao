import { useState, useEffect } from "react";

// function App() {
// 	//Exercicio 1
// 	const [count, setCount] = useState(4);
// 	const [theme, setTheme] = useState("black");

// 	function decrementCount() {
// 		setCount((prevCount) => prevCount - 1);
// 	}

// 	function incrementCount() {
// 		setCount((prevCount) => prevCount + 1);
// 	}

// 	return (
// 		<>
// 			<button onClick={decrementCount}>-</button>
// 			<span>{count}</span>
// 			<span>{theme}</span>
// 			<button onClick={incrementCount}>+</button>
// 		</>
// 	);
// 	//Fim
// }

// export default App;

export default function App() {
	const [windowWidth, setwindowWidth] = useState(window.innerWidth);

	const handleResize = () => {
		setwindowWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener("resize", handleResize);
	}, []);

	return <div>{windowWidth}</div>;
}
