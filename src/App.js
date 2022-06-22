import React from "react";
import FunctionContextComponent from "./FunctionContextComponent";
import { ThemeProvider } from "./ThemeContext";

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

// export default function App() {
//Exercicio 2
// 	const [resourceType, setResourceType] = useState("posts");

// 	useEffect(() => {
// 		console.log("resource changed");

// 		return () => {
// 			//funciona como um cleanup (retorna ele antes)
// 			console.log("return from resource change");
// 		};
// 	}, [resourceType]);

// 	return (
// 		<>
// 			<div>
// 				<button onClick={() => setResourceType("posts")}>Posts</button>
// 				<button onClick={() => setResourceType("users")}>Users</button>
// 				<button onClick={() => setResourceType("comments")}>Comments</button>
// 			</div>
// 			<h1>{resourceType}</h1>
// 		</>
//Fim
// 	);
// }

export default function App() {
	return (
		<ThemeProvider>
			<FunctionContextComponent />
		</ThemeProvider>
	);
}
