import Logo from "../assets/robot.png"

export default function Navbar() {
	return (
		<div className="navigation">
			<nav className="navigation__nav">
			<label className="navigation__icons">
				<a className="navigation__a" title="Inicio">App Chat</a> 
				<img className="navigation__logo" src={Logo} alt="Logo"/>
            </label>
			<div>
                <ul className="navigation__ul">
					<li className="navigation__home">
						<a className="navigation__a--home">Home</a>
					</li>
					<li className="navigation__add">
						<a className="navigation__a--home">Add</a>
					</li>
					<li className="navigation__categories">
						<a className="navigation__a--home">Categories</a>
					</li>
				</ul>
            </div>

			<span>
				<a className="navigation__a--burger">
				<svg xmlns="http://www.w3.org/2000/svg" height="40" width="40"><path d="M5 30v-2.792h30V30Zm0-8.625v-2.75h30v2.75Zm0-8.583V10h30v2.792Z"/></svg>
				</a>
			</span>	
			</nav>
		</div>
	);
}
