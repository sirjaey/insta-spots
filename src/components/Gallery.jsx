import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";


export function Gallery({ newCards }) {
	
	const [liked, setLiked] = useState(null);

	
	
	// const storedCards = localStorage.getItem("cards");
	// const juwa = JSON.parse(storedCards);
	// // console.log(juwa)

	let card;

	function handleLike(id) {
		const card = newCards.find((c) => c.id === id);
		if (card) {
			// Toggle the liked state of the card
			card.liked = !card.liked;
			console.log(card.liked)
		}
	}

	console.log(card)
	
	

	

	// const storeCards = localStorage.getItem("cards");
	const storedCards = newCards || JSON.parse(localStorage.getItem("cards"));
	// console.log(storedCards)

	return (
		<div className="grid">
			{storedCards.map((card, i) => (
				<div className="card" key={i}>
					<img
						src={card.image}
						alt={card.title}
						className="image-one-section"
					/>
					<div className="card-text">
						<div>
							<p>{card.title}</p>
						</div>
						<div onClick={() => {handleLike(card.id)
						}}>
							{card.liked ? (
								<FontAwesomeIcon icon={faHeart} fill="red" />
							) : (
								card.icon
							)}
						</div>
					</div>
				</div>
			))}
		</div>
	);
}