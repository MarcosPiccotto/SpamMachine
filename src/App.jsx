import { useState } from "react";
import "./sass/index.scss";
import Card from "./Components/Card";
import Data from "./assets/DataBase";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
	// const [count, setCount] = useState(0);
	const cards = Data.map((item) => {
		return (
			<Card
				text={item.text}
				date={item.date}
				categorie={item.categorie}
			/>
		);
	});
	return (
		<div className="App">
			<div className="menu">
				<Navbar />
				<div className="menu__cards">{cards}</div>
				<Footer/>
			</div>
		</div>
	);
}

export default App;
