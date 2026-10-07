"use client"
import {useState} from "react";
import {useHistory} from "@/context/history-context";
import { RollData } from "@/lib/game/types"
import { getRollData } from "@/lib/game/game"

export function useDice() {
    const [rollData, setRollData] = useState<RollData | undefined>(undefined);
    const [numberOfDice, setNumberOfDice] = useState<number>(3);
    const {addRollData} = useHistory();

    const rollDice = () => {
        const data: RollData = getRollData(numberOfDice);
        setRollData(data);
        addRollData(data);
    };

    const reset = () => {
        setNumberOfDice(3);
        setRollData(undefined);
    };

    return {rollData, rollDice, reset, numberOfDice, setNumberOfDice};
}