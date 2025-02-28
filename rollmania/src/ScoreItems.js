import './ScoreItems.css';

function ScoreItems(props) {
	return (
    <li>{props.player_name}: {props.player_score}</li>
	);
}

export default ScoreItems;
