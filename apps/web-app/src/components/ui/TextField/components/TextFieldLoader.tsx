import { BasicLoader } from '@/assets/Loaders'
import { type BaseComponentProps, type FC } from '@/models'
import clsx from 'clsx'

interface TextFieldLoaderProps extends BaseComponentProps {
  active?: boolean
}

export const TextFieldLoader: FC<TextFieldLoaderProps> = ({ active = false, ...props }) => {
  const { className, ...loaderProps } = props

  return (
        <div
            className='top-0 right-1 absolute h-full flex items-center mr-1'
        >
            {
                active && <BasicLoader className={clsx('text-blue-300 z-40', className)} {...loaderProps} />
            }
        </div>
  )
}
