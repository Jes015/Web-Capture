import { SectionLayout } from '@/layouts'
import { type BaseComponentProps, type WindowData } from '@/models'
import { useWindowSystemStore } from '@/services/store/zustand'
import { useEffect } from 'react'
import { Rnd, type Props as RndProps } from 'react-rnd'
import { WindowContent, WindowHeader } from './components'

interface WindowProps extends BaseComponentProps {
  rndconfig?: RndProps
  windowData: WindowData
}

export const Window = ({ children, className, rndconfig, windowData }: WindowProps) => {
  const [superposeAWindow] = useWindowSystemStore(state => [state.superposeAWindow])

  useEffect(() => {
    handleOnClickToSuperposeWindow()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleOnClickToSuperposeWindow = () => {
    superposeAWindow(windowData.id)
  }

  return (
    <Rnd
      onMouseDown={handleOnClickToSuperposeWindow}
      maxWidth={200}
      minHeight={120}
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
            'flex flex-col w-full h-auto',
            className
          ].join(' ')
        }
      >
        {children}
      </SectionLayout>
    </Rnd>
  )
}

Window.Header = WindowHeader
Window.Content = WindowContent
