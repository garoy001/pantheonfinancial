import { HiOutlineMail } from 'react-icons/hi';
import { FaRegAddressBook } from 'react-icons/fa';
import logoCropped from '../media/pantheonlogo-cropped.png';
export const Footer = () => {
	return (
		<div class="container footer-container">
			<div className="footerHead">
				<div className="footer-head-wrapper">
					<div className="address">
						<FaRegAddressBook
							style={{ marginRight: '1rem', fontSize: '2rem' }}
						/>
						<p>
							2500 Quantum Lakes Blvd, Suite 100 Boynton Beach, Florida 33426
						</p>
					</div>
					<br></br>
					<div>
						<HiOutlineMail style={{ marginRight: '1rem', fontSize: '2rem' }} />
						<a href="mailto: team@pantheonfinancial.com">
							team@pantheonfinancial.com
						</a>
					</div>
				</div>
			</div>
			<footer class="py-3 my-4">
				<ul class="nav justify-content-center border-bottom pb-3 mb-3">
					<li class="nav-item">
						<a href="#home" class="nav-link px-2 text-white">
							Home
						</a>
					</li>
					<li class="nav-item">
						<a href="#thesis" class="nav-link px-2 text-white">
							Our Thesis
						</a>
					</li>
					<li class="nav-item">
						<a href="#expertise" class="nav-link px-2 text-white">
							Our Mission
						</a>
					</li>
					<li class="nav-item">
						<a href="#team" class="nav-link px-2 text-white">
							Our Team
						</a>
					</li>
					<li class="nav-item">
						<a href="#partners" class="nav-link px-2 text-white">
							Our Partners
						</a>
					</li>
					<li class="nav-item">
						<a href="#insights" class="nav-link px-2 text-white">
							Our Insights
						</a>
					</li>
				</ul>
				<p class="text-center text-white">
					&copy; 2023 Pantheon Financial Partners LP. <br></br>All rights
					reserved.
				</p>
			</footer>
			<img
				class="d-block mx-auto mb-4 logo-cropped"
				src={logoCropped}
				alt="Cropped version of Pantheon Logo"
				width="200"
				height="100"
			/>
		</div>
	);
};
