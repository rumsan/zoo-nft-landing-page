import React from 'react';

function AboutUs({ afterElment }) {
	return (
		<section className={`${afterElment} faq-bg`}>
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<h2 className="title">
							Join With Us On Our Mission To Increase Efforts Of Animal Conservation With{' '}
							<span style={{ color: '#fdd241' }}> Animal NFTs</span>
						</h2>
						<div className="adoption-content">
							<p>
								Animal NFTs provide a new revenue source for habitat custodians, wildlife
								conservationists, zoos and sanctuaries to support their animal conservation efforts
								and engage animal lovers and visitors to contribute.
							</p>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="faq-wrapper">
							<div className="section-title mb-35">
								<h2 className="title">Why Animal NFTs?</h2>
							</div>
							<div className="accordion" id="accordionExample">
								<div className="card">
									<div className="card-header" id="headingOne">
										<h2 className="mb-0">
											<button
												className="btn btn-link btn-block text-left"
												type="button"
												data-toggle="collapse"
												data-target="#collapseOne"
												aria-expanded="true"
												aria-controls="collapseOne"
											>
												NFT for social good.
											</button>
										</h2>
									</div>
									<div
										id="collapseOne"
										className="collapse show"
										aria-labelledby="headingOne"
										data-parent="#accordionExample"
									>
										<div className="card-body">
											NFTs are revolutionizing the current art market. Use this groundbreaking
											technology to fund animal welfare and build social impact.
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header" id="headingTwo">
										<h2 className="mb-0">
											<button
												className="btn btn-link btn-block text-left collapsed"
												type="button"
												data-toggle="collapse"
												data-target="#collapseTwo"
												aria-expanded="false"
												aria-controls="collapseTwo"
											>
												Support animal care and welfare.
											</button>
										</h2>
									</div>
									<div
										id="collapseTwo"
										className="collapse"
										aria-labelledby="headingTwo"
										data-parent="#accordionExample"
									>
										<div className="card-body">
											Animal NFTs support animal care and welfare with continuous income for
											custodians and organizations with royalties through animal NFT trading.
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header" id="headingThree">
										<h2 className="mb-0">
											<button
												className="btn btn-link btn-block text-left collapsed"
												type="button"
												data-toggle="collapse"
												data-target="#collapseThree"
												aria-expanded="false"
												aria-controls="collapseThree"
											>
												Protect endangered species.
											</button>
										</h2>
									</div>
									<div
										id="collapseThree"
										className="collapse"
										aria-labelledby="headingThree"
										data-parent="#accordionExample"
									>
										<div className="card-body">
											Increase the value of nature, support habitat custodians and provide a new
											channel for fundraising to support endangered animals.
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="faq-shape">
				<img src="img/images/faq_shape.png" alt="" />
			</div>
		</section>
	);
}

export default AboutUs;
