import './Nav.css'

export function Nav() {
	return (
		<nav>
			<span>
				<a><img id="logo" src="/" alt="Vocabula Logo"></img></a>
			</span>
			<input className="searchBox" placeholder='Search here...' />
		</nav>
	);
}
