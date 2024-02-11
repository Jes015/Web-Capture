import { Button, Input } from '@/components/ui'
import { SectionLayout } from '@/layouts'
import { type SectionLayoutHeaderPropsPartial } from '@/layouts/SectionLayout/components'
import { type WindowData } from '@/models'
import { useWindowSystemStore } from '@/services/store/zustand'
import { Cross1Icon } from '@radix-ui/react-icons'

interface WindowHeaderProps extends SectionLayoutHeaderPropsPartial {
  windowData: WindowData
}

export const WindowHeader: React.FC<WindowHeaderProps> = ({ icon, rightNode, windowData }) => {
  const [removeWindow, updateWindow] = useWindowSystemStore(state => [state.removeWindow, state.updateWindow])

  const handleOnClickToCloseWindow = () => {
    removeWindow(windowData.id)
  }

  const handleToRename = (event: React.FormEvent<HTMLInputElement>) => {
    const newWindowName = event.currentTarget.value

    const newWindowData = { ...windowData }

    newWindowData.name = newWindowName
    updateWindow(windowData.id, newWindowData)
  }

  return (
        <SectionLayout.Header
            className='select-none w-full'
            name={
              <Input className='w-full border-none px-1' defaultValue={windowData.name} onInput={handleToRename} />
            }
            rightNode={
                <div
                    className='flex items-center gap-1'
                >
                    {rightNode}
                    <Button
                        size='sm'
                        className='h-full'
                        onClick={handleOnClickToCloseWindow}
                    >
                        <Cross1Icon />
                    </Button>
                </div>
            }
            {...{ icon }}
        />
  )
}
