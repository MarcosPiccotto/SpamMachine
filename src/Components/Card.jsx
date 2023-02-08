export default function Card({ text, date, categorie }) {
	return (
		<div className="card">
			<div className="card__categorie">
				<p>{categorie}</p>
			</div>
			<div className="card__text">
				<p>{text}</p>
			</div>
			<div className="card__date">
				<p>{date}</p>
			</div>
		</div>
	);
}
