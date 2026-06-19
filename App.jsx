import React from "react"
import Banner from "./components/Banner"
import Keyboard from "./components/Keyboard"
import Languages from "./components/Languages"
import NewGameButton from "./components/NewGameButton"
import Word from "./components/Word"

export default function Hangman() {
	return (
		<>
			<div className="container">
				<header className="text">
					<h1>Assembly: Endgame</h1>
					<p className="subheader">Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
				</header>
				<Banner />
				<main>
					<Languages />
					<Word />
					<Keyboard />
					<NewGameButton />
				</main>
			</div>
		</>
	)
}
