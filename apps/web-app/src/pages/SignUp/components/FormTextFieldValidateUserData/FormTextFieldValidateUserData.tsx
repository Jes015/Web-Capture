import { Input, TextField, type InputProps } from '@/components/ui'
import { type CheckUserTypeParams, type FC } from '@/models'
import clsx from 'clsx'
import { type UseFormRegisterReturn } from 'react-hook-form'
import { useFormTextFieldValidateUserData } from './hooks'

interface AsyncInputProps {
  userKey: CheckUserTypeParams
  label: React.ReactNode
  error: string | undefined
  register: UseFormRegisterReturn<string>
  inputProps: InputProps
}

export const FormTextFieldValidateUserData: FC<AsyncInputProps> = ({ userKey, inputProps, error, label, register }) => {
  const inputName = register.name

  const { loading } = useFormTextFieldValidateUserData(inputName, userKey)

  return (
    <TextField>
      <TextField.Label className='text-sm'>{label}</TextField.Label>
      <div className='w-full h-auto relative'>
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
        <TextField.Loader active={loading} />
      </div>
      <TextField.Error className='self-end'>{error}</TextField.Error>
    </TextField>
  )
}
