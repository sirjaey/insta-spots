

export default function EditProfile({
	occupation,
	name,
	setAvatarURL,
	setOccupation,
	setName,
	setEditProfile,
	editProfile,
}) {
	const handleImageChange = (event) => {
		setAvatarURL(URL.createObjectURL(event.target.files[0]));
	};

	const handleSubmitEdit = (e) => {
		e.preventDefault();
		setEditProfile(!editProfile);
	};

	return (
		<div className="edit-bioDat modal-overlay">
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