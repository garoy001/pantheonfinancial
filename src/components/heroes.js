import videomp4 from '../media/aerial-video/miami-beach-aerial-2021-09-02-14-02-15-utc-transcode.mp4';
import videowebm from '../media/aerial-video/miami-beach-aerial-2021-09-02-14-02-15-utc-transcode.webm';
import Fade from 'react-reveal/Fade';
export const HeroDivider = (props) => {
	if (props.type == '2') {
		return <div className="c-example-divider"></div>;
	} else if (props.type == '3') {
		return <div className="d-example-divider"></div>;
	} else {
		return <div class="b-example-divider"></div>;
	}
};
export const HeroCenter = (props) => {
	const classes = `${props.classAdd} px-4 py-5 my-5 text-center`;
	let title = '';
	if (props.textTitle) {
		title = props.textTitle;
	}
	return (
		<div className={classes}>
			<Fade>{title}</Fade>

			<div class="col-lg-6 mx-auto">
				<Fade>{props.textContent}</Fade>
			</div>
		</div>
	);
};
export const HeroCenter2 = (props) => {
	const classes = `${props.classAdd} px-4 py-5 my-5 text-center`;
	let title = '';
	if (props.textTitle) {
		title = props.textTitle;
	}
	return (
		<div className={classes}>
			<Fade>{title}</Fade>

			<div class="col-lg-8 mx-auto">
				<Fade>{props.textContent}</Fade>
			</div>
		</div>
	);
};
export const HeroCenter3 = (props) => {
	const classes = `${props.classAdd} px-4 py-5 my-5 `;
	let title = '';
	if (props.textTitle) {
		title = props.textTitle;
	}
	return <div class=" mx-auto">{props.textContent}</div>;
};
export const HeroCenterScreenshot = (props) => {
	const classes = `${props.classAdd} px-4 pt-5 my-5 text-center border-bottom`;
	return (
		<div className={classes}>
			<h1 class="display-4 fw-bold">Centered screenshot</h1>
			<div class="col-lg-6 mx-auto">{props.textContent}</div>
			<div class="overflow-hidden" style="max-height: 30vh;">
				<div class="container px-5">
					<img
						src="bootstrap-docs.png"
						class="img-fluid border rounded-3 shadow-lg mb-4"
						alt="Example image"
						width="700"
						height="500"
						loading="lazy"
					/>
				</div>
			</div>
		</div>
	);
};
export const HeroLeftImage = (props) => {
	return (
		<div class="container col-12  py-5">
			<div class="row flex-lg-row-reverse align-items-center g-5 py-5">
				<div class="col-6 side-image-box" style={{ height: '40rem' }}>
					<div className="side-image-wrapper"></div>
				</div>
				<div class="col-5 wrap-between" style={{ marginRight: '1.5rem' }}>
					<Fade>
						{props.textTitle}
						{props.textContent}
					</Fade>
				</div>
				<div class="col-1"></div>
			</div>
		</div>
	);
};
export const HeroVertCenteredForm = () => {
	return (
		<div class="container col-xl-10 col-xxl-8 px-4 py-5">
			<div class="row align-items-center g-lg-5 py-5">
				<div class="col-lg-7 text-center text-lg-start">
					<h1 class="display-4 fw-bold lh-1 mb-3">
						Vertically centered hero sign-up form
					</h1>
					<p class="col-lg-10 fs-4">
						Below is an example form built entirely with Bootstrap’s form
						controls. Each required form group has a validation state that can
						be triggered by attempting to submit the form without completing it.
					</p>
				</div>
				<div class="col-md-10 mx-auto col-lg-5">
					<form class="p-4 p-md-5 border rounded-3 bg-light">
						<div class="form-floating mb-3">
							<input
								type="email"
								class="form-control"
								id="floatingInput"
								placeholder="name@example.com"
							/>
							<label for="floatingInput">Email address</label>
						</div>
						<div class="form-floating mb-3">
							<input
								type="password"
								class="form-control"
								id="floatingPassword"
								placeholder="Password"
							/>
							<label for="floatingPassword">Password</label>
						</div>
						<div class="checkbox mb-3">
							<label>
								<input type="checkbox" value="remember-me" /> Remember me
							</label>
						</div>
						<button class="w-100 btn btn-lg btn-primary" type="submit">
							Sign up
						</button>
						<hr class="my-4" />
						<small class="text-muted">
							By clicking Sign up, you agree to the terms of use.
						</small>
					</form>
				</div>
			</div>
		</div>
	);
};
export const HeroBorderedImage = () => {
	return (
		<div class="container my-5">
			<div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
				<div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
					<h1 class="display-4 fw-bold lh-1">
						Border hero with cropped image and shadows
					</h1>
					<p class="lead">
						Quickly design and customize responsive mobile-first sites with
						Bootstrap, the world’s most popular front-end open source toolkit,
						featuring Sass variables and mixins, responsive grid system,
						extensive prebuilt components, and powerful JavaScript plugins.
					</p>
					<div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
						<button
							type="button"
							class="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
						>
							Primary
						</button>
						<button type="button" class="btn btn-outline-secondary btn-lg px-4">
							Default
						</button>
					</div>
				</div>
				<div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
					<img
						class="rounded-lg-3"
						src="bootstrap-docs.png"
						alt=""
						width="720"
					/>
				</div>
			</div>
		</div>
	);
};
export const HeroDark = () => {
	return (
		<div class="bg-dark text-secondary px-4 py-5 text-center">
			<div class="py-5">
				<h1 class="display-5 fw-bold text-white">Dark mode hero</h1>
				<div class="col-lg-6 mx-auto">
					<p class="fs-5 mb-4">
						Quickly design and customize responsive mobile-first sites with
						Bootstrap, the world’s most popular front-end open source toolkit,
						featuring Sass variables and mixins, responsive grid system,
						extensive prebuilt components, and powerful JavaScript plugins.
					</p>
				</div>
			</div>
		</div>
	);
};
export const HeroDarkVideo = () => {
	return (
		<div className="video-wrapper">
			<video autoPlay muted loop playsInline id="videoBg">
				<source src={videomp4} />
				<source src={videowebm} />
			</video>
		</div>
	);
};
// export const HeroLeftImage = () => {
//     return()
// }

// export const HeroLeftImage = () => {
//     return()
// }
