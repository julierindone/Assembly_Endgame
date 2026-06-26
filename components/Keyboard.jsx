import React from "react";

export default function Keyboard({keyboardKeys, handleKeyClick}) {
	const inWordClickedStyle = { backgroundColor: "var(--green)" }
	const notInWordClickedStyle = { backgroundColor: "var(--coral)" }

	const keyboardElement = keyboardKeys.map(key => {
		return <button
			id={key.value}
			className="keyboardKey"
			onClick={() => handleKeyClick(key.value)}
			style={key.inWord && key.isClicked
				? inWordClickedStyle
				: !key.inWord && key.isClicked
					? notInWordClickedStyle
					: null}
		>
			{key.value}
		</button >
	})



	return (
		<div className="keyboard">
			{keyboardElement}
		</div>
	)
}