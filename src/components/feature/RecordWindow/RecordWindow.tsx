import { IconRecord } from "@/assets/Icons"
import { Button, Window } from "@/components/ui"

export const RecordWindow = () => {
    return (
        <Window
            title="Record Window"
            icon={<IconRecord className="text-red-400" />}
        >
            <Button>
                Start Recording
            </Button>
            <Button>
                Stop Recording
            </Button>
        </Window>
    )
}
