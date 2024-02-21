import { FormTextField } from '@/components/feature'
import { Button } from '@/components/ui'
import { useGlobalAuth } from '@/hooks'
import { StatusCodes, type BaseComponentType, type UserSignInDTO } from '@/models'
import { toast } from '@/utils/others'
import { zodResolver } from '@hookform/resolvers/zod'
import { isAxiosError } from 'axios'
import { useForm } from 'react-hook-form'
import { signInSchema } from '../models'

export const SignInForm: BaseComponentType = () => {
  const { signIn } = useGlobalAuth()

  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm<UserSignInDTO>({
    resolver: zodResolver(signInSchema)
  })

  const handleOnSubmit = handleSubmit(
    async (data: UserSignInDTO) => {
      try {
        await signIn(data)
        toast.message('You\'ve successfully signed in', 'success')
      } catch (error) {
        if (isAxiosError(error)) {
          const errorStatusCode = error?.response?.data?.statusCode
          if (errorStatusCode === StatusCodes.TooManyRequests) {
            toast.message('You\'ve reached the sign-in attempt limit. Try again in 5 hours.', 'warning')
          } else if (errorStatusCode === StatusCodes.Forbidden) {
            toast.message('Invalid email or password', 'error')
          }
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
        label='Email'
        register={register('email')}
        error={errors.email?.message}
        inputProps={{
          placeholder: 'loki@gmail.com',
          type: 'email',
          autoFocus: true
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
      <Button size='xl' className='mt-1 !rounded-lg' color='light'>Sign in</Button>
    </form>
  )
}


