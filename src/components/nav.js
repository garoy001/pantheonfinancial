import logo from '../media/pf_wordmark_white.svg';

export const Nav = () => {
	return (
		<nav
			className="navbar navbar-expand-lg navbar-dark nav-box"
			aria-label="navbar"
		>
			<a className="navbar-brand" href="#home">
				<img className="rounded-lg-3" src={logo} alt="" width="166" />
			</a>
			<div className="container-fluid nav-link-box">
				<button
					className="navbar-toggler nav-collapse-button"
					type="button"
					data-toggle="collapse"
					data-target="#navbarPF"
					aria-controls="navbarPF"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div
					className="collapse navbar-collapse justify-content-md-end"
					id="navbarPF"
				>
					<ul className="navbar-nav">
						<li className="nav-item">
							<a
								className="nav-link active nav-link-text"
								aria-current="page"
								href="#thesis"
							>
								Our Thesis
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link active nav-link-text"
								aria-current="page"
								href="#expertise"
							>
								Our Mission
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link active nav-link-text"
								aria-current="page"
								href="#team"
							>
								Our Team
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link active nav-link-text"
								aria-current="page"
								href="#partners"
							>
								Our Partners
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link active nav-link-text"
								aria-current="page"
								href="#insights"
							>
								Our Insights
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link active nav-link-text"
								aria-current="page"
								href="#contact"
							>
								Contact
							</a>
						</li>
					</ul>
					<div className="d-lg-flex  justify-content-lg-end">
						<a
							rel="noopener noreferrer"
							href="https://pantheon.formidium.com/login"
							target={'_blank'}
						>
							<button className="btn btn-secondary login-btn">Login</button>
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};
