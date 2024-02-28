import { FormTextField } from '@/components/feature'
import { Button } from '@/components/ui'
import { useGlobalAuth } from '@/hooks'
import { StatusCodes, type BaseComponentType, type UserSignUpDTO } from '@/models'
import { toast } from '@/utils/others'
import { zodResolver } from '@hookform/resolvers/zod'
import { isAxiosError } from 'axios'
import { FormProvider, useForm } from 'react-hook-form'
import { FormTextFieldValidateUserData } from '.'
import { signUpSchema } from '../models'

export const SignUpForm: BaseComponentType = () => {
  const { signUp } = useGlobalAuth()

  const formMethods = useForm<UserSignUpDTO>({
    resolver: zodResolver(signUpSchema),
    mode: 'onChange'
  })

  const handleOnSubmit = formMethods.handleSubmit(
    async (data: UserSignUpDTO) => {
      try {
        await signUp(data)
        toast.message('Check your email to confirm your account', 'success')
      } catch (error) {
        if (isAxiosError(error)) {
          const errorStatusCode = error?.response?.data?.statusCode
          if (errorStatusCode === StatusCodes.TooManyRequests) {
            toast.message('You\'ve reached the sign-up attempt limit. Try again in 1 day.', 'warning')
          } else if (errorStatusCode === StatusCodes.Conflict) {
            toast.message('Email or username already exits', 'error')
          }
        }
      }
    }
  )

  return (
    <FormProvider {...formMethods} >
      <form
        onSubmit={handleOnSubmit}
        className='flex w-full flex-col gap-2'
      >
        <FormTextFieldValidateUserData
          userKey='username'
          label='Username'
          register={formMethods.register('username')}
          error={formMethods.formState.errors.username?.message}
          inputProps={{
            placeholder: 'ElChicoLindo23',
            autoFocus: true
          }}
        />
        <FormTextFieldValidateUserData
          userKey='email'
          label='Email'
          register={formMethods.register('email')}
          error={formMethods.formState.errors.email?.message}
          inputProps={{
            placeholder: 'loki@gmail.com',
            type: 'email'
          }}
        />
        <FormTextField
          label='Password'
          register={formMethods.register('password')}
          error={formMethods.formState.errors.password?.message}
          inputProps={{
            placeholder: 'Uee232d3i4',
            type: 'password'
          }}
        />
        <Button disabled={formMethods.formState.isSubmitting} size='xl' className='mt-1 !rounded-lg' color='light'>Sign Up</Button>
      </form>
    </FormProvider>
  )
}


