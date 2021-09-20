import { useRouter } from "next/router";
import { useState } from "react";

const Multiplayer = () => {

    const router = useRouter();
    const [joinurl, setJoinUrl] = useState("");

    const joinUrl = (e) => {
        e.preventDefault();
        router.push(`/multiplayer/${joinurl}`);
    }

    return (
        <div className="multiplayer-container">
            <form>
                <label>Create a New Game<div className="subtext">*the creator is always Player 1</div></label>

                <button className="btn" type="submit">Start New Game</button>
            </form>
            <form onSubmit={joinUrl}>
                <label>Join an existing Game<div className="subtext">*you will join this game as Player 2</div></label>
                <input placeholder="Enter Unique Code" value={joinurl} onChange={(e) => { setJoinUrl(e.target.value) }} required />
                <button className="btn" type="submit">Join Game</button>
            </form>
        </div>
    );
}

export default Multiplayer;