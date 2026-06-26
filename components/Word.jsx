import React from "react";

	export default function Word(props) {
		const wordElement = props.secretWord.split('').map(letter => <p className="wordKey"><span>{letter}</span></p>)

		return (
		<div className="word">
			{wordElement}
		</div>
	)
}