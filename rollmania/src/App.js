import './App.css';
import Dice from'./Dice.js';
import Title from './Title.js';
import RollButton from './RollButton.js';

import {useState} from 'react';

function App() {
	
	let [roll, setRoll] = useState(false);

	function roll_dice() {
		setRoll(true);
	}

  return (
		<div className="Rollmania">
			<Title titulo="|~Rollmania~|"/>
				<main className="App">
					<Dice cantidad="3" roll={roll}/>
				</main>
				<RollButton roll_func={roll_dice}/>
		</div>
	);
}

export default App;
