import { FormTextField } from '@/components/feature'
import { Button } from '@/components/ui'
import { useGlobalAuth } from '@/hooks'
import { type BaseComponentType, type UserSignUpDTO } from '@/models'
import { toast } from '@/utils/others'
import { zodResolver } from '@hookform/resolvers/zod'
import { isAxiosError } from 'axios'
import { useForm } from 'react-hook-form'
import { signUpSchema } from '../models'

export const SignUpForm: BaseComponentType = () => {
  const { signUp } = useGlobalAuth()

  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm<UserSignUpDTO>({
    resolver: zodResolver(signUpSchema)
  })

  const handleOnSubmit = handleSubmit(
    async (data: UserSignUpDTO) => {
      try {
        await signUp(data)
        toast.message('Check your email to confirm your account', 'success')
      } catch (error) {
        if (isAxiosError(error)) {
          const errorStatusCode = error?.response?.data?.statusCode
          if (errorStatusCode === 429) {
            toast.message('You\'ve reached the sign-up attempt limit. Try again in 1 day.', 'warning')
          } else if (errorStatusCode === 409) {
            toast.message('Email or username already exits', 'error')
          }
          console.log(error)
        } else {
          toast.message('Something went wrong', 'error')
        }
      }
    }
  )

  return (
    <form
      onSubmit={handleOnSubmit}
      className='flex w-full flex-col gap-2'
    >
      <FormTextField
        label='Username'
        register={register('username')}
        error={errors.username?.message}
        inputProps={{
          placeholder: 'ElChicoLindo23',
          autoFocus: true
        }}
      />
      <FormTextField
        label='Email'
        register={register('email')}
        error={errors.email?.message}
        inputProps={{
          placeholder: 'loki@gmail.com',
          type: 'email'
        }}
      />
      <FormTextField
        label='Password'
        register={register('password')}
        error={errors.password?.message}
        inputProps={{
          placeholder: 'Uee232d3i4',
          type: 'password'
        }}
      />
      <Button size='xl' className='mt-1 !rounded-lg' color='light'>Sign Up</Button>
    </form>
  )
}


