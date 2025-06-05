import { useState } from "react";
import Logo from "./components/Logo.jsx";
import Profile from "./components/Profile.jsx";
import { Gallery } from "./components/Gallery.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faHeart } from "@fortawesome/free-regular-svg-icons";

const cards = [
	{
		id: 1,
		image: "./valThorens.png",
		title: "Val Thorens",
		icon: <FontAwesomeIcon icon={faHeart} />,
		iconName: "love-icon",
		liked: false, // Initial state for the like button
	},
	{
		id: 2,
		image: "./restaurantTerrace.png",
		title: "Restaurant terrace",
		icon: <FontAwesomeIcon icon={faHeart} />,
		iconName: "love-icon",
	},
	{
		id: 3,
		image: "./outdoorCafe.png",
		title: "An outdoor cafe",
		icon: <FontAwesomeIcon icon={faHeart} />,
		iconName: "love-icon",
	},
	{
		id: 4,
		image: "./veryLongBridge.png",
		title: "A very long bridge, over the forest...",
		icon: <FontAwesomeIcon icon={faHeart} />,
		iconName: "love-icon",
	},
	{
		id: 5,
		image: "./tunnel.png",
		title: "Tunnel with morning light",
		icon: <FontAwesomeIcon icon={faHeart} />,
		iconName: "love-icon",
	},
	{
		id: 6,
		image: "./mountainHouse.png",
		title: "Mountain house",
		icon: <FontAwesomeIcon icon={faHeart} />,
		iconName: "love-icon",
	},
];

// function saveCards(cards) {
// 	localStorage.setItem("cards", JSON.stringify(cards));
// }
// saveCards(cards);

// function loadCards() {
// 	const storedCards = JSON.parse(localStorage.getItem("cards"));
// 	console.log(storedCards)
// 	return storedCards ? storedCards : cards;
// }
// loadCards();

export default function App() {
	const [newCards, setNewCards] = useState(cards);
	return (
		<div className="container">
			<Logo />
			<main>
				<Profile newCards={newCards} setNewCards={setNewCards} />
				<Gallery newCards={newCards} setNewCards={setNewCards} />
			</main>
		</div>
	);
}
