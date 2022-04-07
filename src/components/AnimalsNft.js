import React from 'react';

function AnimalsNft() {
	return (
		<section className="adoption-area pt-50">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-xl-7 col-lg-9">
						<div className="section-title text-center mb-50px">
							<img src="../../img/pawprint.png" alt="" style={{ width: '40px' }} />
							<h2 className="title mt-1">TECHNOLOGY</h2>
						</div>
					</div>
				</div>
				<div className="row align-items-center justify-content-center mt-3">
					<div className="col-xl-5 col-lg-6">
						<div className="adoption-content text-center mobile-adoption-content">
							<img src="../../img/green-nft.png" alt="green-nft" />
						</div>
					</div>
					<div className="col-xl-5 col-lg-6">
						<div className="adoption-content">
							<h1 className="title">Green NFT</h1>
							<p>
								We use Polygon blockchain, a “green” blockchain that is optimized for
								environmentally friendly NFTs and ensures low energy consumption.
							</p>
						</div>
					</div>
				</div>
				<div className="row align-items-center justify-content-center">
					<div className="col-xl-5 col-lg-6">
						<div className="adoption-content">
							<h1 className="title mobile-title">What are Animal NFTs?</h1>
							<p>
								NFTs or “Non-Fungible Tokens” are unique digital assets that exist on a blockchain
								and cannot be replicated. They represent real-world items like artwork, videos and
								real estate. Using this innovative technology for social good, our animal NFTs are
								unique virtual representations of animals that cannot be replaced or copied. Animal
								NFTs can contribute to supporting the welfare of animals and conserving their
								habitats.
							</p>
						</div>
					</div>
					<div className="col-xl-5 col-lg-6">
						<div className="adoption-content">
							<img src="../../img/animal-nft.jpg" alt="green-nft" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AnimalsNft;
