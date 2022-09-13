import React from "react";
import Experiences from "./Components/Experiences";
import Feature from "./Components/Feature";
import Header from "./Components/Header";
import Services from "./Components/Services";

const Home = () => {
	return (
		<main>
			<Header />
			<Services />
			<Experiences />
			<Feature />
		</main>
	);
};

export default Home;
