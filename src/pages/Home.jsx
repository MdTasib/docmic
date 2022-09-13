import React from "react";
import Experiences from "./Components/Experiences";
import Header from "./Components/Header";
import Services from "./Components/Services";

const Home = () => {
	return (
		<main>
			<Header />
			<Services />
			<Experiences />
		</main>
	);
};

export default Home;
