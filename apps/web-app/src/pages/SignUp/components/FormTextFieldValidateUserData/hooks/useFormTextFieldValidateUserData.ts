import { useDebounce } from '@/hooks'
import { StatusCodes, type ApiOK, type CheckUserTypeParams } from '@/models'
import { backRoutes } from '@/routing'
import axios, { isAxiosError } from 'axios'
import { useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'

export const useFormTextFieldValidateUserData = (inputName: string, userKey: CheckUserTypeParams) => {
  const { watch, setError, clearErrors, formState: { errors, isDirty } } = useFormContext()
  const inputValue = watch(inputName)
  const inputError = errors?.[inputName]
  const [loading, setLoading] = useState(false)

  const { debouncedValue: inputValueDebounced } = useDebounce(inputValue, 700)
  const { debouncedValue: inputErrorDebounced } = useDebounce(inputError, 700)

  useEffect(() => {
    if (inputError != null || inputValue === '' || inputValue == null || !isDirty) return

    setLoading(true)

    const abortController = new AbortController()

    const executionContext = async () => {
      try {
        await axios.post<ApiOK>(backRoutes.checkUserData(userKey), { [userKey]: inputValue }, { signal: abortController.signal })
        clearErrors(inputName)
      } catch (error) {
        if (isAxiosError(error)) {
          const errorStatusCode = error?.response?.data?.statusCode
          if (errorStatusCode === StatusCodes.Conflict) {
            setError(inputName, { message: `${userKey} already exists`, type: 'validate', types: { validate: true } })
          }
        }
      } finally {
        setLoading(false)
      }
    }

    void executionContext()

    return () => {
      if (inputError != null && inputValue != null) return
      abortController.abort()
      setLoading(false)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValueDebounced, inputErrorDebounced])

  return { loading }
}
