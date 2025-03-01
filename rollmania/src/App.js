import './App.css';
import Dice from'./Dice.js';
import Title from './Title.js';
import RollButton from './RollButton.js';
import PlayerName from './PlayerName.js';
import Score from './Score.js';
import { useState, useRef } from 'react';

function App() {
	
	const [roll, setRoll] = useState(false);
	const player_name = useRef("");
	const player_score = useRef(0);

	function roll_dice() {
		setRoll(true);
	}

	function setPlayerName (name) {
		player_name.current = name;
		console.log("El nombre del jugador es: "+name);
	}

	function setPlayerScore (total) {
		player_score.current = total;

		console.log("Puntuacion total: "+total);
	}

  return (
		<div className="Rollmania">
			<Title titulo="|~Rollmania~|"/>
			<PlayerName onPlayerNameChange={setPlayerName}/>
			<main className="App">
				<Dice cantidad="3" roll={roll} onTotal={setPlayerScore}/>
			</main>
			<RollButton roll_func={roll_dice}/>
			<Score />
		</div>
	);
}

export default App;
