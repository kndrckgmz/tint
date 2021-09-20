import { useEffect, useState } from 'react';

const LocalGame = () => {
    const [player, setPlayer] = useState(1)
    const [color, setColor] = useState("var(--darkblue)")
    const [indicator, setIndicator] = useState("var(--darkblue)")
    const [one, setOne] = useState("")
    const [two, setTwo] = useState("")
    const [three, setThree] = useState("")
    const [four, setFour] = useState("")
    const [five, setFive] = useState("")
    const [six, setSix] = useState("")
    const [seven, setSeven] = useState("")
    const [eight, setEight] = useState("")
    const [nine, setNine] = useState("")
    const [winner, setWinner] = useState("")
    const [message, setMessage] = useState("")

    useEffect(() => {
        if (player === 1 || player === 3 || player === 5 || player === 7 || player === 9) {
            setColor("var(--darkblue)");
            setIndicator("var(--darkblue)");
        }
        else {
            setColor("var(--lightblue)")
            setIndicator("var(--lightblue)");
        }
    }, [player])

    const playerLoop = () => {
        if (player > 0 && player < 10) {
            let a = player;
            setPlayer(a + 1);
        }
    }

    const handleClick = (e) => {
        playerLoop();
        let target = e.target;
        target.disabled = true;
        target.style.backgroundColor = color

        if (color === "var(--darkblue)") {
            if (target.value === "1") {
                setOne("dblue");
            }
            else if (target.value === "2") {
                setTwo("dblue");
            }
            else if (target.value === "3") {
                setThree("dblue");
            }
            else if (target.value === "4") {
                setFour("dblue");
            }
            else if (target.value === "5") {
                setFive("dblue");
            }
            else if (target.value === "6") {
                setSix("dblue");
            }
            else if (target.value === "7") {
                setSeven("dblue");
            }
            else if (target.value === "8") {
                setEight("dblue");
            }
            else if (target.value === "9") {
                setNine("dblue");
            }
        }
        if (color === "var(--lightblue)") {
            if (target.value === "1") {
                setOne("lblue");
            }
            else if (target.value === "2") {
                setTwo("lblue");
            }
            else if (target.value === "3") {
                setThree("lblue");
            }
            else if (target.value === "4") {
                setFour("lblue");
            }
            else if (target.value === "5") {
                setFive("lblue");
            }
            else if (target.value === "6") {
                setSix("lblue");
            }
            else if (target.value === "7") {
                setSeven("lblue");
            }
            else if (target.value === "8") {
                setEight("lblue");
            }
            else if (target.value === "9") {
                setNine("lblue");
            }
        }
    }

    useEffect(() => {
        if (one === "dblue" && two === "dblue" && three === "dblue") {
            setWinner("D")
        }
        else if (one === "lblue" && two === "lblue" && three === "lblue") {
            setWinner("L")
        }
        else if (four === "dblue" && five === "dblue" && six === "dblue") {
            setWinner("D")
        }
        else if (four === "lblue" && five === "lblue" && six === "lblue") {
            setWinner("L")
        }
        else if (seven === "dblue" && eight === "dblue" && nine === "dblue") {
            setWinner("D")
        }
        else if (seven === "lblue" && eight === "lblue" && nine === "lblue") {
            setWinner("L")
        }
        else if (one === "dblue" && four === "dblue" && seven === "dblue") {
            setWinner("D")
        }
        else if (one === "lblue" && four === "lblue" && seven === "lblue") {
            setWinner("L")
        }
        else if (two === "dblue" && five === "dblue" && eight === "dblue") {
            setWinner("D")
        }
        else if (two === "lblue" && five === "lblue" && eight === "lblue") {
            setWinner("L")
        }
        else if (three === "dblue" && six === "dblue" && nine === "dblue") {
            setWinner("D")
        }
        else if (three === "lblue" && six === "lblue" && nine === "lblue") {
            setWinner("L")
        }
        else if (one === "dblue" && five === "dblue" && nine === "dblue") {
            setWinner("D")
        }
        else if (one === "lblue" && five === "lblue" && nine === "lblue") {
            setWinner("L")
        }
        else if (three === "dblue" && five === "dblue" && seven === "dblue") {
            setWinner("D")
        }
        else if (three === "lblue" && five === "lblue" && seven === "lblue") {
            setWinner("L")
        }
    }, [one, two, three, four, five, six, seven, eight, nine])

    useEffect(() => {
        if (winner === "" && one !== "" && two !== "" && three !== "" && four !== "" && five !== "" && six !== "" && seven !== "" && eight !== "" && nine !== "") {
            setMessage("Draw!")
            endGame();
        }
        else if (winner === "D") {
            setMessage("Dark Blue Wins!")
            endGame();
        }
        else if (winner === "L") {
            setMessage("Light Blue Wins!")
            endGame();
        }
    }, [winner, one, two, three, four, five, six, seven, eight, nine])

    const endGame = () => {
        let cover = document.getElementById("cover");
        cover.style.opacity = 1;
        cover.style.pointerEvents = "unset";
    }

    const restart = () => {
        setPlayer(1)
        setColor("var(--darkblue)")
        setIndicator("var(--darkblue)")
        setOne("")
        setTwo("")
        setThree("")
        setFour("")
        setFive("")
        setSix("")
        setSeven("")
        setEight("")
        setNine("")
        setWinner("")
        setMessage("")
        let cover = document.getElementById("cover");
        cover.style.opacity = 0;
        cover.style.pointerEvents = "none";
        let button = document.getElementsByClassName("coin");
        for (let i = 0; i <= 8; i++) {
            button[i].style.backgroundColor = "var(--placeholder)";
            button[i].disabled = false;
        }
    }

    return (
        <>
            <div className="current-player" style={{ backgroundColor: indicator }}>Current Player</div>
            <div className="player-container" id="player-container">
                <button className="coin" onClick={handleClick} value="1"></button>
                <button className="coin" onClick={handleClick} value="2"></button>
                <button className="coin" onClick={handleClick} value="3"></button>
                <button className="coin" onClick={handleClick} value="4"></button>
                <button className="coin" onClick={handleClick} value="5"></button>
                <button className="coin" onClick={handleClick} value="6"></button>
                <button className="coin" onClick={handleClick} value="7"></button>
                <button className="coin" onClick={handleClick} value="8"></button>
                <button className="coin" onClick={handleClick} value="9"></button>
            </div>
            <div className="cover" id="cover">
                <div className="modal">
                    <div className="modal-message">{message}</div>
                    <button className="btn" onClick={restart}>Play Again!</button>
                </div>
            </div>
        </>
    );
}

export default LocalGame;