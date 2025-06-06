import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

export default function CreateNewPost({ newCards, setNewCards, newPost, setNewPost }) {
	const [title, setTitle] = useState("");
	const [imageURL, setImageURL] = useState("");
	const [url, setUrl] = useState("");

	const handleImageChange = (event) => {
		setImageURL(URL.createObjectURL(event.target.files[0]));
	};
	

	function handleSubmit(e) {
		e.preventDefault();
		if (
			(title === "" && imageURL === "") ||
			(title === "" && url === "") ||
			title === ""
		) {
			alert("Please fill in all fields");
			return;
		}
		const newCard = {
			id: newCards.length + 1,
			image: `${imageURL || url}`,
			title: `${title}`,
			icon: <FontAwesomeIcon icon={faHeart} fill="red" />,
			iconName: "love-icon",
			liked: false,
		};

		setNewCards((prevCards) => [...prevCards, newCard]);
		console.log(newCards);
		setTitle("");
		setImageURL("");
		setUrl("");
		setNewPost(!newPost);
		console.log(newCards);
	}
	function handleCloseModal() {
		setNewPost(!newPost);
	}

	return (
		<div className="create-new-post modal-overlay">
			<span onClick={handleCloseModal} className="closeModalButton">
				<FontAwesomeIcon icon={faXmark} />
			</span>

			<div id="form">
				<form onSubmit={handleSubmit} className="modal-content">
					<div className="form-properties">
						<label htmlFor="title">Enter Title</label>
						<input
							type="text"
							className="title"
							placeholder="Title"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
					</div>
					<div className="form-properties">
						<label htmlFor="image">Choose image to upload</label>
						<input
							type="file"
							className="image"
							placeholder="Image URL"
							accept="image/*"
							onChange={handleImageChange}
						/>
					</div>
					<div className="form-properties">
						<label htmlFor="url">Enter Image URL</label>
						<input
							type="text"
							className="url"
							placeholder="Image URL"
							value={url}
							onChange={(e) => setUrl(e.target.value)}
						/>
					</div>
					<button id="submit" className="new-post-btn">
						Add New Post
					</button>
				</form>
			</div>
		</div>
	);
}