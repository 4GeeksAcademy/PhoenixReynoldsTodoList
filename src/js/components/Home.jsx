import React, { useState } from "react";
import Appname from "./Appname.jsx";
import List from "./list.jsx";
import Listtotal from "./listtotal.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState('');
	const [tasks, setTasks] = useState([]);

	return (
		<div className="text-center">
			<Appname />
			<div>
				<input type="text" onChange={e => setInputValue(e.target.value)} value={inputValue} />
			</div>
			<List />
			<Listtotal />
		</div>
	);
};

export default Home;