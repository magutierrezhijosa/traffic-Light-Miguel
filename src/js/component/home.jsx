import React from "react";
import TrafficLight from "./TrafficLight";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	return (
		<>
			<div className="container text-center d-flex justify-content-center my-5">
				<TrafficLight/>
			</div>
		</>
		
	);
};

export default Home;
