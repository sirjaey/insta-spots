
export default function Preview({ currentCard }) {
	
	return (
		// This component is used to show a preview of the card when clicked
		<div>
			<div className="preview modal-overlay">
				{/* <span onClick={handleClosePreview} className="closeModalButton">
					<FontAwesomeIcon icon={faXmark} />
				</span> */}
				<div className="modal-content">
                    <img src={currentCard.image} alt={currentCard.title} />
                    <p>{currentCard.title}</p>
				</div>
			</div>
		</div>
	);
}
