import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function EditProfile({
	occupation,
	name,
	avatarURL,
	setAvatarURL,
	setOccupation,
	setName,
	setEditProfile,
	editProfile,
	setNewName,
	setNewOccupation,
	setNewAvatarURL,
}) {
	const handleImageChange = (event) => {
		setAvatarURL(URL.createObjectURL(event.target.files[0]));
	};

	const handleSubmitEdit = (e) => {
		e.preventDefault();
		localStorage.setItem("name", name);
		localStorage.setItem("occupation", occupation);
		localStorage.setItem("avatar", avatarURL);
		if (name === "" || occupation === "") {
			// If any field is empty, alert the user
			alert("Please fill in all fields");
			return;
		}
		setNewName(name);
		setNewOccupation(occupation);
		setNewAvatarURL(avatarURL);
		setEditProfile(!editProfile);
	};

	const handleCloseModal = (e) => {
		e.preventDefault();
		setEditProfile(!editProfile);
	};

	return (
		<div className="edit-bioDat modal-overlay">
			<span onClick={handleCloseModal} className="closeModalButton">
				<FontAwesomeIcon icon={faXmark} />
			</span>
			<form action="" onSubmit={handleSubmitEdit} className="modal-content">
				<div className="form-properties">
					<label htmlFor="name">Enter your full name</label>
					<input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className="form-properties">
					<label htmlFor="occupation">What's your occupation?</label>
					<input
						type="text"
						value={occupation}
						onChange={(e) => setOccupation(e.target.value)}
					/>
				</div>
				<div className="form-properties">
					<label htmlFor="name">Upload profile picture</label>
					<input type="file" accept="image/*" onChange={handleImageChange} />
				</div>
				<button>Submit</button>
			</form>
		</div>
	);
}
