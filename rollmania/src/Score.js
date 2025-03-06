import './Score.css';
import ScoreItems from './ScoreItems.js';

function Score(props) {
	let score_json = localStorage.getItem("scores");

	let score_list = [];

	let scores_parsed = JSON.parse(score_json);
	
	for (let i = 0; i < scores_parsed.length; i++) {
		let name = scores_parsed[i].nombre;
		let score = scores_parsed[i].score;

		score_list.push(<ScoreItems player_name={name} player_score={score} key={i} />);
	}

	/*let score_list = [
		<ScoreItems player_name="Mimic" player_score="20" key="0" />,
		<ScoreItems player_name="William" player_score="12" key="1" />,
		<ScoreItems player_name="David" player_score="43" key="2" />,
		<ScoreItems player_name="Edwin" player_score="56" key="3" />,
	];*/
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
