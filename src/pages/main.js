import {
	HeroDivider,
	HeroCenter,
	HeroCenterScreenshot,
	HeroLeftImage,
	HeroVertCenteredForm,
	HeroBorderedImage,
	HeroDark,
	HeroDarkVideo,
} from '../components/heroes';
import { Nav } from '../components/nav';
export const Main = () => {
	return (
		<>
			<div className="container-fluid">
				<div className="row video-row">
					<section id="home">
						<Nav />
						<div className="video-overlay">
							<div className="video-overlay-text-wrapper">
								<h2 className="video-overlay-text ">
									We believe in the transformative power of blockchain
									technology and the viability of digital assets.
								</h2>
							</div>
						</div>
						<HeroDarkVideo />
					</section>
				</div>
				<div className="row">
					<section id="thesis"></section>
					<section id="expertise"></section>
					<section id="team"></section>
					<section id="insights"></section>
					<section id="contact"></section>
					<HeroDivider />
					<HeroCenter />
				</div>
			</div>
		</>
	);
};
