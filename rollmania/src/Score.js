import './Score.css';
import ScoreItems from './ScoreItems.js';

function Score(props) {
	let score_list = [
		<ScoreItems player_name="Mimic" player_score="20" key="0" />,
		<ScoreItems player_name="William" player_score="12" key="1" />,
		<ScoreItems player_name="David" player_score="43" key="2" />,
		<ScoreItems player_name="Edwin" player_score="56" key="3" />,
	];
	return (
    <section className="Score">
			<h2>Scores</h2>
		
		<ol>
			{score_list}
		</ol>
		</section>
	);
}

export default Score;
