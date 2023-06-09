import React, { useState } from "react";
import "./ModeButton.css";

const ModeButton: React.FC = () => {
    const [isMode, setIsMode] = useState(false);
    const [isGame, setIsGame] = useState(false);
    const [mode, setMode] = useState(false);
    const [game, setGame] = useState(false);

    const handleMode = () => {
        if (isGame) {
            setIsGame(false);
        }
        setIsMode(!isMode);
    };

    const handleGame = () => {
        if (isMode) {
            setIsMode(false);
        }
        setIsGame(!isGame);
    };

    const modeClick = (select: boolean) => {
        if (select === mode) {
            setIsMode (false);
            return ;
        }
        setMode(select);
        setIsMode(false);
    };

    const gameClick = (select: boolean) => {
        if (select === game) {
            setIsGame (false);
            return ;
        }
        setGame(select);
        setIsGame(false);
    };

    const handleMatch = () => {
        
    };

    return (
        <div className="button">
            <div className="dropdown">
            <button className="mode-button" onClick={handleMode}> 
            {
                mode ? <span>Normal</span> : <span>Event</span>
            }
            </button>
            {isMode && (
                <div className="content">
                <ul>
                    <li onClick={() => (modeClick(true))}>Normal</li>
                    <li onClick={() => (modeClick(false))}>Event</li>
                </ul>
                </div>
            )}
            <button className="rank-button" onClick={handleGame}>
            {
                game ? <span>Normal</span> : <span>Rank</span>
            }
            </button>
            {isGame && (
                <div className="content">
                <ul>
                    <li onClick={() => (gameClick(true))}>Normal</li>
                    <li onClick={() => (gameClick(false))}>Rank</li>
                </ul>
                </div>
            )}
            </div>
            <div>
                <button className="match" onClick={handleMatch}>매칭</button>
            </div>
        </div>
    );
};

export default ModeButton;
