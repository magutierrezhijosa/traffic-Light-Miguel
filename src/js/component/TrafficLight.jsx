import React, { useEffect, useState } from "react";
import "../../styles/index.css";

const TrafficLight = () => {

    const [greenOn, setGreenOn] = useState(false);
    const [yellowOn, setYellowOn] = useState(false);
    const [redOn, setRedOn] = useState(false);
    const [showPurple, setShowPurple] = useState(false);
    const [purpleOn, setPurpleOn] = useState(false);
    const [ramdomColor, setRamdomColor] = useState(0); 

    const handleTurnRed = () => {

        setRedOn(true);
        setYellowOn(false);
        setGreenOn(false);
        setPurpleOn(false);
        
    }


    const handleTurnYellow = () => {

        setRedOn(false);
        setYellowOn(true);
        setGreenOn(false);
        setPurpleOn(false);
        
    }

    const handleTurnGreen = () => {

        setRedOn(false);
        setYellowOn(false);
        setGreenOn(true);
        setPurpleOn(false);
    }

    const handleTurnPurple = () => {

        setRedOn(false);
        setYellowOn(false);
        setGreenOn(false);
        setPurpleOn(true);
    }

    

    const changeColorRamdon = () => {


        if (showPurple) {
            setRamdomColor(Math.floor((Math.random()* 4) + 1));
        }
        else{
            setRamdomColor(Math.floor((Math.random()* 3) + 1));
        }

        if (ramdomColor == 1) {
            setRedOn(true);
            setYellowOn(false);
            setGreenOn(false);
            setPurpleOn(false);
        }
        if (ramdomColor == 2) {
            setRedOn(false);
            setYellowOn(true);
            setGreenOn(false);
            setPurpleOn(false);
        }
        if (ramdomColor == 3) {
            setRedOn(false);
            setYellowOn(false);
            setGreenOn(true);
            setPurpleOn(false);
        }
        if(ramdomColor == 4){
            setRedOn(false);
            setYellowOn(false);
            setGreenOn(false);
            setPurpleOn(true);
        }
    }

    const purpleChange = () => {

        if (showPurple) {
            setShowPurple(false);
        }
        else{
            setShowPurple(true);
        }
    }
    return (
    
        <>
            <div className="col-2">
            <div className="rounded-2 bg-black d-flex flex-column justify-content-around align-items-center mt-5" style={{width : "100px", height : "200px" }}>
                    <div onClick={handleTurnRed} className={`rounded-circle circle-size ${redOn ? "red" : "red-dark"}`}  ></div>
                    <div onClick={handleTurnYellow} className={`rounded-circle circle-size ${yellowOn ? "yellow" : "yellow-dark"}`} ></div>
                    <div onClick={handleTurnGreen} className={`rounded-circle circle-size ${greenOn ? "green" : "green-dark"}`}></div>
                    {showPurple && 
                        <div onClick={handleTurnPurple} className={`rounded-circle circle-size ${purpleOn ? "purple" : "purple-dark"}`} ></div>
                    }
                </div>
                <button onClick={changeColorRamdon} className="btn btn-success mt-3" >Cambiar de color</button>
                <button onClick={purpleChange} className={`btn mt-3 ${"purple"}  `}>Crear Luz Purpura</button> 
            </div>
        </>
    );
}

export default TrafficLight;