import React from 'react';
import MainSlider from '../components/MainSlider';
import AboutUs from '../components/AboutUs';
import HowItWorks from '../components/HowItWorks';
import Counter from '../components/Counter';
import AnimalsNft from '../components/AnimalsNft';
import ContactUs from '../components/ContactUs';

function Home() {
	return (
		<main>
			<MainSlider />
			<AboutUs />
			<HowItWorks />
			<Counter />
			<AnimalsNft />
			<ContactUs />
		</main>
	);
}

export default Home;
