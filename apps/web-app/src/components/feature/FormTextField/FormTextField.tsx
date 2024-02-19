import { Input, TextField, type InputProps } from '@/components/ui'
import { type FC } from '@/models'
import clsx from 'clsx'
import { type UseFormRegisterReturn } from 'react-hook-form'

interface FormTextFieldProps {
  label: React.ReactNode
  error: string | undefined
  register: UseFormRegisterReturn<string>
  inputProps: InputProps
}

export const FormTextField: FC<FormTextFieldProps> = ({ error, register, label, inputProps }) => {
  return (
        <TextField>
            <TextField.Label className='text-sm'>{label}</TextField.Label>
            <Input
                className={
                    clsx(
                      'w-full h-10 rounded-lg',
                      { '!border-red-400': error }
                    )
                }
                {...inputProps}
                {...register}
            />
            <TextField.Error className='self-end'>{error}</TextField.Error>
        </TextField>
  )
}
