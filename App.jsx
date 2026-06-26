import { useState } from "react"
import Banner from "./components/Banner"
import Keyboard from "./components/Keyboard"
import Languages from "./components/Languages"
import NewGameButton from "./components/NewGameButton"
import Word from "./components/Word"

export default function Hangman() {
	// First load, and when new game button clicked.

	// REMOVE
	const word = "oscar".toUpperCase().split('')

	const [secretWord, setSecretWord] = useState(word)

	// only used on First load, and when new game button clicked? Or does it need to rerender every time a key is clicked? probably not
	const [keyboardKeys, setKeyboardKeys] = useState(() => getNewKeyboard())
	const [counter, setCounter] = useState(0)

	function getNewKeyboard() {
		const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

		return new Array(26)
			.fill({ value: '', inWord: false, isClicked: false })
			.map((key, index) => ({
				...key,
				value: alphabet[index],
				inWord: (secretWord.includes(alphabet[index]) ? true : false)
			}))
	}

	function handleKeyClick(value) {
		// keyboard stops activity once available tries are gone. will need to add in a
		// winning game condition or create a gameOver variable like we had in tenzies.
		if (counter < 8) {
			setKeyboardKeys(keyboardKeys.map(key => {
				if (key.value === value) {
					!key.inWord && updateCounter()
					return { ...key, isClicked: true }
				}

				return key.value === value
					? { ...key, isClicked: true }
					: { ...key }
			}
			))
		}
	}

	function updateCounter() {
		setCounter(count => count + 1)
	}

	return (
		<>
			<div className="container">
				<header className="text">
					<h1>Assembly: Endgame</h1>
					<p className="subheader">Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
				</header>
				<Banner />
				<main>
					<Languages counter={counter} />
					<Word secretWord={secretWord} />
					<Keyboard
						keyboardKeys={keyboardKeys}
						handleKeyClick={handleKeyClick}
					/>
					<NewGameButton />
				</main>
			</div>
		</>
	)
}
