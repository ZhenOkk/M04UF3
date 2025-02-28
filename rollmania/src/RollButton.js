import './RollButton.css';
import { useState, useEffect } from 'react';

function RollButton(props) {

	let [count, setCount] = useState(5);
	
	useEffect(() => {
		setTimeout(() => {
			if (count > 0) {
				setCount(count - 1);
			}
		}, 1000);
	});

  return (
    <button 
			className="RollButton" 
			onClick={props.roll_func}
			disabled = {count > 0 ? "true" : ""}
		>
			{count > 0 ? count : "- ROLL -"}
		</button>
  );
}

export default RollButton;
