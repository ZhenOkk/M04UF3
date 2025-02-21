import './RollButton.css';

function RollButton(props) {

  return (
    <button className="RollButton" onClick={props.roll_func}>
			- ROLL -
		</button>
  );
}

export default RollButton;
