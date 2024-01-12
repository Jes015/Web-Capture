import { type BaseComponentType } from '@/models'

export const SectionLayoutContent: BaseComponentType = ({ children, className }) => {
  return (
      <div
        className={
          [
            className
          ].join(' ')
        }
      >
        {children}
      </div>
  )
}
