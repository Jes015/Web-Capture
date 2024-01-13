import { SectionLayout } from '@/layouts'
import { type SectionLayoutHeaderPropsPartial } from '@/layouts/SectionLayout/components'
import { type BaseComponentProps } from '@/models'
import { Rnd, type Props as RndProps } from 'react-rnd'
interface WindowProps extends BaseComponentProps, SectionLayoutHeaderPropsPartial {
  rndconfig?: RndProps
}

export const Window: React.FC<WindowProps> = ({ children, className, icon, title, rightNode, rndconfig }) => {
  return (
    <Rnd
      default={{
        x: 0,
        y: 0,
        width: 200,
        height: 120
      }}
      maxWidth={200}
      minHeight={120}
      bounds='window'
      enableResizing={false}
      enableUserSelectHack
      {...rndconfig}
    >
      <SectionLayout
        className={
          [
            'flex flex-col absolute w-full h-full',
            className
          ].join(' ')
        }
      >
        <SectionLayout.Header
          className='select-none w-full'
          {...{ icon, title, rightNode }}
        />
        <SectionLayout.Content className='flex-grow w-full h-full'>
          {children}
        </SectionLayout.Content>
      </SectionLayout>
    </Rnd>
  )
}
