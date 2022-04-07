import React from 'react';
import { Link } from 'react-router-dom';

function HowItWorks() {
	return (
		<section className="adoption-area-two pt-50 pb-50">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-xl-7 col-lg-9">
						<div className="section-title text-center mb-40">
							<img src="../../img/pawprint.png" alt="" style={{ width: '40px' }} />
							<h2 className="title mt-1">How It Works ?</h2>
							<p>
								You Can Ceate Animal NFTs To Build And Enhance Your Efforts Towards Your Animal Care
								And Conservation
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-xl">
						<div className="adoption-item">
							<div className="adopt-thumb">
								<Link to="/breeder-details">
									<img src="../../img/hiw-2.jpg" alt="" />
								</Link>
							</div>
							<div className="adopt-content">
								<h3 className="title">
									<Link to="/breeder-details">Animal NFTs Campaign</Link>
								</h3>
								<p>
									You Can Ceate Animal NFTs To Build And Enhance Your Efforts Towards Your Animal
									Care And Conservation
								</p>
							</div>
						</div>
					</div>
					<div className="col-xl">
						<div className="adoption-item">
							<div className="adopt-thumb">
								<Link to="/breeder-details">
									<img src="../../img/hiw-1.jpg" alt="" />
								</Link>
							</div>
							<div className="adopt-content">
								<h3 className="title">
									<Link to="/breeder-details">Adopt an Animal Campaigns </Link>
								</h3>
								<p>
									Create or add animal NFTs to your existing Adopt an Animal campaign. These NFTs
									will help adopters build a personal relationship with individual animals through
									special updates.
								</p>
							</div>
						</div>
					</div>
					<div className="col-xl">
						<div className="adoption-item">
							<div className="adopt-thumb">
								<Link to="/breeder-details">
									<img src="../../img/hiw-3.jpg" alt="" />
								</Link>
							</div>
							<div className="adopt-content">
								<h3 className="title">
									<Link to="/breeder-details">Visit Memorabilia</Link>
								</h3>
								<p>
									Turn visits to your sanctuary or zoo into permanent memorabilia for your visitors!
									They can keep a virtual track of all their visits as a permanent memory in
									blockchain.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default HowItWorks;
