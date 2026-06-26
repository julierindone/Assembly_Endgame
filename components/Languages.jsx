export default function Languages({ counter }) {
	const languages = ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Node.js', 'Python', 'Ruby', 'Assembly']

	const languageEls = languages.map(language =>
		<span className={`${language.replace('.', '').toLowerCase()}${languages.indexOf(language) + 1 <= counter ? " darken" : ""}`}>
			{language}
		</span>
	)

	return (
		<div className="language-container">
			{languageEls}
		</div>
	)
}