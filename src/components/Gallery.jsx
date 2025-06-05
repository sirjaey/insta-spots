import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";


export function Gallery({ newCards }) {
	
	const [liked, setLiked] = useState(null);
	
	// const storedCards = localStorage.getItem("cards");
	// const juwa = JSON.parse(storedCards);
	// // console.log(juwa)

	

	function handleLike(id) {
		const card = newCards.find((like) => like.id === id)
		if (card) {
			// Toggle the liked state of the card
			card.liked = !card.liked;
			setLiked(card.liked);
			console.log(card.liked);
		}
	}


	// const storeCards = localStorage.getItem("cards");
	// const storedCards = JSON.parse(localStorage.getItem("cards"));
	// console.log(storedCards)

	return (
		<div className="grid">
			{newCards.map((card, i) => (
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
						<div
							onClick={() => {
								handleLike(card.id);
							}}
							className="like-icon">
							{card.liked ? (
								<FontAwesomeIcon icon={faHeart} style={{ color: "#f41515" }} />
							) : (
								card.icon
							)}
							{/* {card.liked ? (
								<FontAwesomeIcon icon={faHeart} fill="red" />
							) : (
								
							)} */}
						</div>
					</div>
				</div>
			))}
		</div>
	);
} 