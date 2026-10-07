import {OneDice} from "./one-dice";

type DiceDisplayProps = {
    values: number[];
}

export function DiceDisplay({values}: DiceDisplayProps) {
    return (
        <div className="flex flex-row items-center gap-2">
            {values.map(
                (value: number, index: number) => (
                    <OneDice side={value} key={`${index}_${value}`}/>
                )
            )}
        </div>
    )
}