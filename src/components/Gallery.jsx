import { useState } from "react";
import Preview from "./Preview.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";



export function Gallery({setNewCards, newCards, previewCard, setPreviewCard, unlike }) {
	const [currentCard, setcurrentCard] = useState(null);

// Function to handle the like button click
	function handleLike(id) {
		const card = newCards.find((preview) => preview.id === id);
		if (card) {
			console.log(`Previewing: ${card.title}`);
		}
		card.liked = !card.liked
		console.log(card.liked);
		setNewCards((prevCards) =>
			prevCards.map((c) => (c.id === id ? { ...c, liked: card.liked } : c))
		);
		
	}

	
// Function to handle the preview of a newCards
	function handlePreview(id) {
		const card = newCards.find((preview) => preview.id === id);
		if (card) {
			console.log(`Previewing: ${card.title}`);
		}
		setcurrentCard(card)
		console.log(currentCard)
		// Toggle the preview state
		setPreviewCard(!previewCard);
	}


	return (
		<div className="grid">
			{newCards.map((card, i) => (
				<div className="card" key={i}>
					<div
						className="image-container"
						onClick={() => handlePreview(card.id)}>
						{previewCard && (
							<Preview currentCard={currentCard} newCards={newCards} />
						)}
						<img src={card.image} alt={card.title} className="gallery-image" />
					</div>
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
								<FontAwesomeIcon icon={unlike} />
							)}
						</div>
					</div>
				</div>
			))}
		</div>
	);
} 
