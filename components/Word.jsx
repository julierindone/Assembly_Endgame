import React from "react";

	export default function Word({secretWord}) {
		const wordElement = secretWord.map(letter => <p className="wordKey"><span>{letter}</span></p>)

		return (
		<div className="word">
			{wordElement}
		</div>
	)
}