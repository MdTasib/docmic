import React from "react";
import Experiences from "./Components/Experiences";
import Feature from "./Components/Feature";
import Header from "./Components/Header";
import Questions from "./Components/Questions";
import Services from "./Components/Services";
import Testimonial from "./Components/Testimonial";

const Home = () => {
	return (
		<main>
			<Header />
			<Services />
			<Experiences />
			<Feature />
			<Questions />
			<Testimonial />
		</main>
	);
};

export default Home;
