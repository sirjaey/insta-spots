import { useState } from "react";
import EditProfile from "./EditProfile.jsx"
import CreateNewPost from "./CreateNewPost.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Profile({ newCards, setNewCards }) {

	const [newPost, setNewPost] = useState(false);
	const [editProfile, setEditProfile] = useState(false);
	const [avatarURL, setAvatarURL] = useState(() => localStorage.getItem("avatar") || "./avatar.png");
	const [occupation, setOccupation] = useState(() => localStorage.getItem("occupation") || "Civil Aviator");
	const [name, setName] = useState(() => localStorage.getItem("name") || "Bessie Coleman");
	const [newName, setNewName] = useState(name);
	const [newOccupation, setNewOccupation] = useState(occupation);
	const [newAvatarURL, setNewAvatarURL] = useState(avatarURL);

	const handleNewPostClick = (e) => {
		e.preventDefault();
		setNewPost(!newPost);
	};

	const handleEditProfile = (e) => {
		e.preventDefault();
		setEditProfile(!editProfile);
	};

	const bioData = [
		{
			name: newName,
			occupation: newOccupation,
			avatar: newAvatarURL,
		},
	];

	return (
		<header className="profile-header">
			{editProfile && (
				<EditProfile
					occupation={occupation}
					name={name}
					avatarURL={avatarURL}
					setAvatarURL={setAvatarURL}
					setOccupation={setOccupation}
					setName={setName}
					setEditProfile={setEditProfile}
					editProfile={editProfile}
					setNewName={setNewName}
					setNewOccupation={setNewOccupation}
					setNewAvatarURL={setNewAvatarURL}
				/>
			)}
			{bioData.map((data) => (
				<div className="profile" key={data.name}>
					<div className="avatar">
						<img src={data.avatar} alt="avatar" />
					</div>
					<div className="bio-data">
						<div className="about">
							<h1>{data.name}</h1>
							<p>{data.occupation}</p>
						</div>
						<div className="edit">
							<span>
								<FontAwesomeIcon icon={faPen} />
							</span>
							<span role="button" onClick={handleEditProfile}>
								Edit Profile
							</span>
						</div>
					</div>
				</div>
			))}

			<div className="new-post">
				<div className="new-post-btn">
					{newPost && (
						<CreateNewPost
							newCards={newCards}
							setNewCards={setNewCards}
							newPost={newPost}
							setNewPost={setNewPost}
						/>
					)}
					<button id="new-post" onClick={handleNewPostClick}>
						<FontAwesomeIcon
							icon={faPlus}
							style={{ backgroundColor: "black", paddingRight: "5px" }}
						/>
						New Post
					</button>
				</div>
			</div>
		</header>
	);
}