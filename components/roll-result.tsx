import {DiceDisplay} from "@/components/dice-display";
import { RollData } from "@/lib/game/types"

type RollResultProps = {
    data: RollData
}

export function RollResult({data}: RollResultProps) {
    return (
        <div className="flex flex-col gap-4 mb-4">
            <DiceDisplay values={data.values}/>
            <div>
                <span className="text-purple-800 font-semibold text-xl">Total:</span>
                <span className="text-amber-600 font-semibold text-xl ml-2">{data.total}</span>
            </div>
        </div>
    )
}