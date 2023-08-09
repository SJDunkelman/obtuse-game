import { useStore } from "@nanostores/react"
import { userId } from "../../stores/userStore.js"
import GameScreen from "../GameScreen.jsx";
import EntryScreen from "../EntryScreen";

export default function PlayScreen(){
    const $userId = useStore(userId);

    return (
        <div class="p-4 rounded-xl border-3 border-black ">
            { $userId !== null ? <GameScreen />: <EntryScreen />}
        </div>
    )
}