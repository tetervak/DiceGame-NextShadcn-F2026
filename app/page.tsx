import { RollHistory } from "@/components/roll-history"
import { DiceRoller } from "@/components/dice-roller"
import { HistoryProvider } from "@/context/history-context"

export default function Page() {
  return (
      <HistoryProvider>
        <DiceRoller />
        <RollHistory />
      </HistoryProvider>
  )
}
