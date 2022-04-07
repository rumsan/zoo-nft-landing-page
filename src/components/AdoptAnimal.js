import React from 'react';
// import { Component } from "react";
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

function PrevArrow(props) {
	const { className, onClick } = props;
	return (
		<button type="button" className={className} onClick={onClick}>
			<img src="img/icon/arrow.png" alt="PREV" />
		</button>
	);
}

function BreedServices() {
	const settings = {
		nav: true,
		dots: false,
		infinite: true,
		speed: 1000,
		autoplay: true,
		arrows: true,
		prevArrow: <PrevArrow />,
		autoplaySpeed: 4000,
		slidesToShow: 3,
		slidesToScroll: 2,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					speed: 1000
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					speed: 1000
				}
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					speed: 1000
				}
			}
		]
	};
	return (
		<section className="breeds-services">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-xl-7 col-lg-9">
						<div className="section-title text-center">
							<h2 className="title">
								MEET THE ANIMALS <span> YOU CAN ADOPT</span>
							</h2>
						</div>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-lg-12">
						<Slider className="breed-services-active slick" {...settings}>
							<div className="breed-services-item">
								<div className="thumb">
									<img src="img/animal-adopt/monkey.jpg" className="img-fluid" width={380} alt="" />
								</div>
								<div className="content">
									<h3 className="title">
										<Link to="/adopt-animal-detail">ADOPT NOW</Link>
									</h3>
								</div>
							</div>
							<div className="breed-services-item">
								<div className="thumb">
									<img src="img/animal-adopt/parrot.jpg" alt="" className="img-fluid" width={380} />
								</div>
								<div className="content">
									<h3 className="title">
										<Link to="/adopt-animal-detail">ADOPT NOW</Link>
									</h3>
								</div>
							</div>
							<div className="breed-services-item">
								<div className="thumb">
									<img
										src="img/animal-adopt/tiger-cub.jpg"
										alt=""
										className="img-fluid"
										width={380}
									/>
								</div>
								<div className="content">
									<h3 className="title">
										<Link to="/adopt-animal-detail">ADOPT NOW</Link>
									</h3>
								</div>
							</div>
							<div className="breed-services-item">
								<div className="thumb">
									<img src="img/animal-adopt/deer.jpg" alt="" className="img-fluid" width={380} />
								</div>
								<div className="content">
									<h3 className="title">
										<Link to="/adopt-animal-detail">ADOPT NOW</Link>
									</h3>
								</div>
							</div>
							<div className="breed-services-item">
								<div className="thumb">
									<img
										src="img/animal-adopt/elephant.jpg"
										alt=""
										className="img-fluid"
										width={380}
									/>
								</div>
								<div className="content">
									<h3 className="title">
										<Link to="/adopt-animal-detail">ADOPT NOW</Link>
									</h3>
								</div>
							</div>
							<div className="breed-services-item">
								<div className="thumb">
									<img src="img/animal-adopt/bird.jpg" alt="" className="img-fluid" width={380} />
								</div>
								<div className="content">
									<h3 className="title">
										<Link to="/adopt-animal-detail">ADOPT NOW</Link>
									</h3>
								</div>
							</div>
							<div className="breed-services-item">
								<div className="thumb">
									<img src="img/animal-adopt/panda.jpg" alt="" className="img-fluid" width={380} />
								</div>
								<div className="content">
									<h3 className="title">
										<Link to="/adopt-animal-detail">ADOPT NOW</Link>
									</h3>
								</div>
							</div>
							<div className="breed-services-item">
								<div className="thumb">
									<img src="img/animal-adopt/tiger.jpg" alt="" className="img-fluid" width={380} />
								</div>
								<div className="content">
									<h3 className="title">
										<Link to="/adopt-animal-detail">ADOPT NOW</Link>
									</h3>
								</div>
							</div>
						</Slider>
					</div>
				</div>
			</div>
			<div className="breed-services-shape">
				<img src="img/images/breed_services_shape01.png" alt="" />
			</div>
			<div className="breed-services-shape shape-two">
				<img src="img/images/breed_services_shape02.png" alt="" />
			</div>
		</section>
	);
}

export default BreedServices;
