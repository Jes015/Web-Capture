import { IconRecord } from '@/assets/Icons'
import { Button, Window } from '@/components/ui'

export const RecordWindow = () => {
  return (
        <Window
            className="[max-width:12rem] w-full"
            title="Record Window"
            icon={<IconRecord className="text-red-400 text-base" />}
        >
            <div
                className="flex flex-col gap-1 pt-1"
            >
                <div
                    className="flex font-bold"
                >
                    <div
                        className="flex flex-col"
                    >
                        <span
                            className="text-xs leading-3"
                        >
                            Time
                        </span>
                        <span
                            className="text-3xl leading-7"
                        >
                            00:00
                        </span>
                    </div>
                    <div
                        className="flex flex-col items-end justify-center flex-grow"
                    >
                        <div
                            className="flex gap-1 text-xs"
                        >
                            <span
                                className="font-normal"
                            >
                                Started at
                            </span>
                            <span
                                className="text-xs"
                            >
                                04:12
                            </span>
                        </div>
                        <div
                            className="flex gap-1 text-xs"
                        >
                            <span
                                className="font-normal"
                            >
                                Started at
                            </span>
                            <span
                                className="text-xs"
                            >
                                04:12
                            </span>
                        </div>
                    </div>
                </div>
                <footer
                    className="flex gap-1 text-[0.77rem]"
                >
                    <Button disabled>
                        Pause
                    </Button>
                    <Button
                        className=" flex-grow"
                    >
                        Start
                    </Button>
                </footer>
            </div>
        </Window>
  )
}
