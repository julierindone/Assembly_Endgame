import React from "react";

export default function Word({ secretWord }) {
	const wordElement = secretWord.map(letter =>
		<p className={`wordKey${!letter.isRevealed ? " hide" : ""}`}><span>{letter.value}</span></p>
	)

	return (
		<div className="word">
			{wordElement}
		</div>
	)
}