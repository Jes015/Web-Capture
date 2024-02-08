import { Button } from '@/components/ui'
import { SectionLayout } from '@/layouts'
import { type SectionLayoutHeaderPropsPartial } from '@/layouts/SectionLayout/components'
import { type WindowData } from '@/models'
import { useWindowSystemStore } from '@/services/store/zustand'
import { Cross1Icon } from '@radix-ui/react-icons'

interface WindowHeaderProps extends SectionLayoutHeaderPropsPartial {
  windowData: WindowData
}

export const WindowHeader: React.FC<WindowHeaderProps> = ({ icon, title, rightNode, windowData }) => {
  const [removeWindow] = useWindowSystemStore(state => [state.removeWindow])

  const handleOnClickToCloseWindow = () => {
    removeWindow(windowData.id)
  }
  return (
        <SectionLayout.Header
            className='select-none w-full'
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
            {...{ icon, title }}
        />
  )
}
