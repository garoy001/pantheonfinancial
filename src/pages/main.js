import {
	HeroDivider,
	HeroCenter,
	HeroCenter2,
	HeroCenter3,
	HeroCenterScreenshot,
	HeroLeftImage,
	HeroVertCenteredForm,
	HeroBorderedImage,
	HeroDark,
	HeroDarkVideo,
} from '../components/heroes';
import { Nav } from '../components/nav';
import { HiOutlineArrowDown } from 'react-icons/hi';
import { SectionHead } from '../components/sectionHead';
import logoCropped from '../media/pantheonlogo-cropped.png';
import stocksImg from '../media/stockschart.jpg';
import businessImg from '../media/businesstable.avif';
import Fade from 'react-reveal/Fade';
import larry from '../media/larryheadshot.png';
import jarrod from '../media/jarrod-squared.jpg';
import brand1 from '../media/brand1.jpg';
import brand2 from '../media/brand2.png';
import brand3 from '../media/brand3.png';
import brand4 from '../media/brand4.png';
import brand5 from '../media/brand5.png';

export const Main = () => {
	return (
		<>
			<div className="container-fluid">
				<div className="row video-row">
					<section id="home">
						<div className="fade-wrapper-1">
							<Fade>
								<Nav />
							</Fade>
						</div>

						<div className="video-overlay">
							<div className="video-overlay-text-wrapper fade-wrapper-1">
								<Fade>
									<h2 className="video-overlay-text ">
										We believe in the transformative power of blockchain
										technology and the viability of digital assets.
									</h2>
									<img
										class="d-block mx-auto mb-4 logo-cropped"
										src={logoCropped}
										alt="Cropped version of Pantheon Logo"
										width="200"
										height="100"
									/>
								</Fade>
							</div>
						</div>

						<HiOutlineArrowDown className="arrow-box" />

						<HeroDarkVideo />
					</section>
				</div>

				<div className="row">
					<div className="d-example-divider"></div>
					<section id="thesis" className="section-bg-image">
						<Fade>
							<SectionHead sectionTitle="Our Thesis" />
						</Fade>

						<HeroCenter
							classAdd="first-centered-hero"
							textTitle={
								<h1 class="display-5 fw-bold">
									An investment philosophy focused on the{' '}
									<span className="yellow-color-text">future of finance</span>.
								</h1>
							}
							textContent={
								<div className="hero-text-wrapper">
									<p className="lead mb-4">
										Established in February of 2021 based on technology that was
										back tested to 2016, Pantheon Financial is a specialized
										investment vehicle in the digital asset space.
									</p>
									<br></br>
									<p className="lead mb-4">
										Deploying our own proprietary automated trading algorithm,
										we have been able to create a consistent track record of
										Coin Acquisition - with a primary focus on Bitcoin.
									</p>
								</div>
							}
						/>
					</section>
					<div className="d-example-divider"></div>
					<section id="expertise">
						<Fade>
							<SectionHead sectionTitle="Our Mission" />
						</Fade>
						<HeroLeftImage
							classAdd=""
							textTitle={
								<h1 class="display-5 fw-bold lh-1 mb-3">
									Harnessing our{' '}
									<span className="highlight-text yellow-color-text">
										diversity
									</span>{' '}
									and{' '}
									<span className="highlight-text yellow-color-text">
										creativity
									</span>{' '}
									to help shape the financial system of tomorrow and achieve
									absolute returns for investors irrespective of market
									conditions.
								</h1>
							}
							textContent={
								<div class="hero-text-wrapper ">
									<h3 className="sub-title">Tracking Your Investment</h3>
									<div className="list-wrapper">
										<ul>
											<li>
												<p class="lead">Daily Net Asset Value Calculations</p>
											</li>
											<li>
												<p class="lead">Monthly Statements</p>
											</li>
											<li>
												<p class="lead">Comprehensive Annual Audit Report</p>
											</li>
										</ul>
										<ul>
											<li>
												<p class="lead">Weekly Remote Meetings for LPs</p>
											</li>
											<li>
												<p class="lead">Monthly Market Insight Newsletters</p>
											</li>
											<li>
												<p class="lead">Curated Webinars and Town Halls</p>
											</li>
										</ul>
									</div>
								</div>
							}
							img={businessImg}
							alt="image of laptops and coffee on a table"
						/>
					</section>
					<div className="d-example-divider"></div>
					<section id="transition" className="section-bg-image">
						<HeroCenter
							classAdd="second-centered-hero"
							textContent={
								<div className="transition-text-wrapper hero-text-wrapper">
									<h4 className="transition-text lead mb-4">
										The cryptocurrency market provides ample opportunity to
										generate positive returns across all market conditions, but
										a{' '}
										<span className="highlight-text yellow-color-text">
											holistic
										</span>
										,
										<span className="highlight-text yellow-color-text">
											{' '}
											analytical
										</span>{' '}
										approach is required to keep a finger on the pulse of the
										market.
									</h4>

									<img
										class="d-block mx-auto mb-4 logo-cropped"
										src={logoCropped}
										alt="Cropped version of Pantheon Logo"
										width="200"
										height="100"
									/>
								</div>
							}
						/>
					</section>
					<div className="d-example-divider"></div>
					<section id="team">
						<Fade>
							<SectionHead sectionTitle="Our Team" />
						</Fade>

						<HeroCenter2
							classAdd="second-centered-hero hero-override"
							textContent={
								<div className="hero-team-wrapper">
									<div className="profile-title">
										<h2>
											Our Team is{' '}
											<span className="yellow-color-text">Led By</span> :
										</h2>
									</div>
									<div className="team-profile">
										<img
											src={larry}
											class="img-fluid border rounded-3 shadow-lg "
											alt="photo of founder/chairman"
											width="260"
											loading="lazy"
										/>
										<div className="profile-text">
											<p className="profile-name">Lawrence Davis</p>
											<p className="profile-position">Founder + Chairman</p>
											<p className="profile-about">
												Lawrence Davis is an author, entrepreneur, experienced
												CEO, and decorated United States Army combat veteran.
												With a background in executive and maritime security,
												Lawrence was also an early cryptocurrency adopter and
												investor and is one of the world’s most passionate
												advocates for blockchain technology.
												<br></br>
												<br></br>
											</p>
											<div className="contact-links">
												<a
													rel="noopener noreferrer"
													target={'_blank'}
													href="https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=lawrence@pantheonfinancial.com&hl=en"
												>
													Contact
												</a>
												<a
													rel="noopener noreferrer"
													target={'_blank'}
													href="https://www.linkedin.com/in/lawrence-davis-046b45211/"
												>
													LinkedIn
												</a>
											</div>
										</div>
									</div>
									<div className="team-profile">
										<img
											src={jarrod}
											class="img-fluid border rounded-3 shadow-lg "
											alt="photo of chief executive officer"
											width="260"
											height="260"
											loading="lazy"
										/>
										<div className="profile-text">
											<p className="profile-name">Jarrod Robertson</p>
											<p className="profile-position">
												Chief Executive Officer
											</p>
											<p className="profile-about">
												Jarrod Robertson has over a decade of experience working
												in the international markets acting as a bridge between
												the US and the EU, providing cross-jurisdictional
												business consultation services and advising on project
												development, go-to-market and MVP strategies, market
												penetration, and capital formation with a specialization
												in private debt, bond, and equity structuring.
												Throughout his career, he has partnered almost
												exclusively with companies that focus on green energy,
												renewable energy, and breakthrough technologies.
											</p>
											<div className="contact-links">
												<a
													rel="noopener noreferrer"
													target={'_blank'}
													href="https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=jarrod@pantheonfinancial.com&hl=en"
												>
													Contact
												</a>
												<a
													rel="noopener noreferrer"
													target={'_blank'}
													href="https://www.linkedin.com/in/stevenjarrod/"
												>
													LinkedIn
												</a>
											</div>
										</div>
									</div>
								</div>
							}
						/>
					</section>
					<div className="d-example-divider"></div>
					<section id="partners">
						<Fade>
							<SectionHead sectionTitle="Our Partners" />
						</Fade>

						<HeroCenter2
							classAdd="second-centered-hero hero-override"
							textContent={
								<div className="hero-partners-wrapper">
									<div className="partner-container">
										<img
											src={brand1}
											class="img-fluid rounded-3  "
											alt="falconx logo"
											loading="lazy"
										/>
										<img
											src={brand2}
											class="img-fluid rounded-3  "
											alt="formidium logo"
											loading="lazy"
										/>
										<img
											src={brand3}
											class="img-fluid rounded-3  "
											alt="riveles wahab llp logo"
											loading="lazy"
										/>
										<img
											src={brand4}
											class="img-fluid rounded-3  "
											alt="opennode logo"
											loading="lazy"
										/>
										<img
											src={brand5}
											class="img-fluid  rounded-3  "
											alt="new city capital logo"
											loading="lazy"
										/>
									</div>
								</div>
							}
						/>
					</section>
					<div className="d-example-divider"></div>
					<section id="insights">
						<SectionHead sectionTitle="Our Insights" />
						<div id="insights" className="section-2 wf-section">
							<div class="slider-container">
								<div class="slider-wrapper">
									<div
										data-delay="4000"
										data-animation="slide"
										class="slider-3 w-slider"
										data-autoplay="false"
										data-easing="ease"
										data-hide-arrows="true"
										data-disable-swipe="false"
										data-autoplay-limit="0"
										data-nav-spacing="3"
										data-duration="500"
										data-infinite="false"
									>
										<div class="mask-2 w-slider-mask">
											<div class="slide-2 w-slide">
												<div class="slide-content-wrapper">
													<div
														style={{ paddingTop: '56.17021276595745%' }}
														class="w-embed-youtubevideo youtube"
													>
														<iframe
															src="https://www.youtube.com/embed/SH2CGAlh6Mc?rel=0&amp;controls=1&amp;autoplay=0&amp;mute=0&amp;start=0"
															frameborder="0"
															style={{
																position: 'absolute',
																left: 0,
																top: 0,
																width: '100%',
																height: '100%',
																pointerEvents: ' auto',
															}}
															allow="autoplay; encrypted-media"
															allowfullscreen=""
															title="Pantheon Town Hall May 2022"
														></iframe>
													</div>
												</div>
											</div>
											<div class="slide-2 w-slide">
												<div class="slide-content-wrapper">
													<div
														style={{ paddingTop: '56.17021276595745%' }}
														class="w-embed-youtubevideo youtube"
													>
														<iframe
															src="https://www.youtube.com/embed/1YyAzVmP9xQ?rel=0&amp;controls=1&amp;autoplay=0&amp;mute=0&amp;start=0"
															frameborder="0"
															style={{
																position: 'absolute',
																left: 0,
																top: 0,
																width: '100%',
																height: '100%',
																pointerEvents: ' auto',
															}}
															allow="autoplay; encrypted-media"
															allowfullscreen=""
															title="What is Cryptocurrency?"
														></iframe>
													</div>
												</div>
											</div>
											<div class="slide-2 w-slide">
												<div class="slide-content-wrapper">
													<div
														style={{ paddingTop: '56.17021276595745%' }}
														class="w-embed-youtubevideo youtube"
													>
														<iframe
															src="https://www.youtube.com/embed/nHhAEkG1y2U?rel=0&amp;controls=1&amp;autoplay=0&amp;mute=0&amp;start=0"
															frameborder="0"
															style={{
																position: 'absolute',
																left: 0,
																top: 0,
																width: '100%',
																height: '100%',
																pointerEvents: ' auto',
															}}
															allow="autoplay; encrypted-media"
															allowfullscreen=""
															title="What is Web 3.0?"
														></iframe>
													</div>
												</div>
											</div>
										</div>
										<div class="slider-left-arrow w-slider-arrow-left">
											<div class="slider-icon w-icon-slider-left"></div>
										</div>
										<div class="slider-right-arrow w-slider-arrow-right">
											<div class="slider-icon w-icon-slider-right"></div>
										</div>
										<div class="slide-nav-2 w-slider-nav w-round"></div>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section id="contact"></section>
					<HeroDivider />
				</div>
			</div>
		</>
	);
};
