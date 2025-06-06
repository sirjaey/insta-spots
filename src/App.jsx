import { useState, useEffect } from "react";
import Logo from "./components/Logo.jsx";
import Profile from "./components/Profile.jsx";
import Footer from "./components/Footer.jsx";
import {cards} from "./components/Card.jsx";
import { Gallery } from "./components/Gallery.jsx";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

export default function App() {
	const [previewCard, setPreviewCard] = useState(false);
	const [newCards, setNewCards] = useState(() => {
		const storedCards = localStorage.getItem("newCards");
		return storedCards ? JSON.parse(storedCards) : cards;
	});
	useEffect(() => {
		localStorage.setItem("newCards", JSON.stringify(newCards));
	}, [newCards]);

	return (
		<div className="container">
			<Logo />
			<main>
				<Profile
					previewCard={previewCard}
					setPreviewCard={setPreviewCard}
					newCards={newCards}
					setNewCards={setNewCards}
				/>
				<Gallery
					previewCard={previewCard}
					setPreviewCard={setPreviewCard}
					newCards={newCards}
					setNewCards={setNewCards}
					unlike={faHeart}
				/>
				<Footer />
			</main>
		</div>
	);
}
