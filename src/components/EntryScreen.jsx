import { useStore } from "@nanostores/react"
import axios from 'axios';
import { BASE_API_URL } from "../consts.js"
import { userName, userId } from "../stores/userStore"
import { currentGameId, targetWord } from "../stores/gameStore.js"


export default function EntryScreen() {
    const $userName = useStore(userName);
    const $userId = useStore(userId);

    const setUsername = (e) => {
        userName.set(e.target.value)
    }

    const handleNewGame = async () => {
        try {
            const response = await axios.post(`${BASE_API_URL}/game/new?user_id=${$userId}`);
            console.log(response.data);
            currentGameId.set(response.data.id);
        } catch (error) {
            console.error("Error starting a new game:", error);
        }
    }

    const userReady = $userName.length > 0;

    return (
        <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-3xl font-semibold tracking-wide">Start</h1>
            <input
                type="text"
                placeholder="Enter your name"
                value={$userName}
                onChange={setUsername}
                className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button onClick={handleNewGame} disabled={!userReady} className={`px-3 py-2 rounded-xl text-white ${userReady ? 'bg-green-400' : 'bg-slate-600'}`} >
                Start New Game
            </button>
            
        </div>
    )
}