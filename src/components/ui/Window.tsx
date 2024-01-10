import { SectionLayout } from '@/layouts'
import { type SectionLayoutHeaderPropsPartial } from '@/layouts/SectionLayout/components'
import { type BaseComponentProps } from '@/models'
import { Rnd } from 'react-rnd'
interface WindowProps extends BaseComponentProps, SectionLayoutHeaderPropsPartial {
}

export const Window: React.FC<WindowProps> = ({ children, className, icon, title }) => {
  return (
        <Rnd
            default={{
              x: 0,
              y: 0,
              width: 200,
              height: 120
            }}
            maxWidth={200}
            maxHeight={120}
            bounds='window'
            enableResizing={false}
            enableUserSelectHack
        >
            <SectionLayout
                className={
                    [
                      'absolute w-full h-full',
                      className
                    ].join(' ')
                }
            >
                <SectionLayout.Header
                    className='select-none w-full'
                    {...{ icon, title }}
                />
                <SectionLayout.Content className='w-full'>
                    {children}
                </SectionLayout.Content>
            </SectionLayout>
        </Rnd>
  )
}
