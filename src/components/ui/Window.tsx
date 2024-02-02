import { Button } from '@/components/ui'
import { SectionLayout } from '@/layouts'
import { type SectionLayoutHeaderPropsPartial } from '@/layouts/SectionLayout/components'
import { type BaseComponentProps, type WindowData } from '@/models'
import { useWindowSystemStore } from '@/services/store/zustand'
import { Cross1Icon } from '@radix-ui/react-icons'
import { useEffect } from 'react'
import { Rnd, type Props as RndProps } from 'react-rnd'
interface WindowProps extends BaseComponentProps, SectionLayoutHeaderPropsPartial {
  rndconfig?: RndProps
  windowData: WindowData
}

export const Window: React.FC<WindowProps> = ({ children, className, icon, title, rightNode, rndconfig, windowData }) => {
  const [superposeAWindow, removeWindow] = useWindowSystemStore(state => [state.superposeAWindow, state.removeWindow])

  useEffect(() => {
    handleOnClickToSuperposeWindow()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleOnClickToSuperposeWindow = () => {
    superposeAWindow(windowData.id)
  }

  const handleOnClickToCloseWindow = () => {
    removeWindow(windowData.id)
  }

  return (
    <Rnd
      onMouseDown={handleOnClickToSuperposeWindow}
      maxWidth={500}
      minHeight={500}
      bounds='window'
      enableResizing={false}
      enableUserSelectHack
      {...rndconfig}
      style={{
        zIndex: windowData.zIndex
      }}
    >
      <SectionLayout
        className={
          [
            'flex flex-col w-full h-full',
            className
          ].join(' ')
        }
      >
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
        <SectionLayout.Content className='flex-grow w-full h-full '>
          {children}
        </SectionLayout.Content>
      </SectionLayout>
    </Rnd>
  )
}
