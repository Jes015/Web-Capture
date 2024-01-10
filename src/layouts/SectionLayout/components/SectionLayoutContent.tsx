import { type BaseComponentType } from '@/models'

export const SectionLayoutContent: BaseComponentType = ({ children, className }) => {
  return (
      <div
        className={
          [
            'p-1',
            className
          ].join(' ')
        }
      >
        {children}
      </div>
  )
}
