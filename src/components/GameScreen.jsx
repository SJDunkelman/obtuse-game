import { currentRound, targetWord } from "../stores/gameStore";
import { useStore } from "@nanostores/react";
import LoadingSpinner from "./LoadingSpinner";
import { motion } from "framer-motion";

export default function GameScreen() {
    const $currentRound = useStore(currentRound);
    const $targetWord = useStore(targetWord);

    const gameLoaded = $targetWord.length > 0;

    const fadeUpAnimation = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
    };

    return (
        <div className="flex flex-col items-center text-center space-y-4">
            {
                gameLoaded ? (
                    <>
                        <h1 className="text-3xl font-semibold tracking-wide">Round {$currentRound}</h1>
                        {
                            $currentRound === 1 ?
                            <motion.p
                                initial="initial"
                                animate="animate"
                                transition="transition"
                                {...fadeUpAnimation}
                            >
                                <span className="text-sm font-light">Define:</span><br/><span className="font-medium text-3xl">{$targetWord}</span>
                            </motion.p>
                            :
                            <p ><span className="text-sm italic font-light">Word:</span><br/><span className="font-medium text-3xl">{$targetWord}</span></p>
                        }
                        
                    </>
                ) : (
                    <LoadingSpinner gameLoading={!gameLoaded} />
                )
            }
        </div>
    );
}
