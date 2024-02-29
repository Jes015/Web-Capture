import { setUpAxiosConfig } from '@/config'
import EmailVerificationPage from '@/pages/EmailVerification/EmailVerification'
import HomePage from '@/pages/Home/Home'
import RootPage from '@/pages/Root/Root'
import SignInPage from '@/pages/SignIn/SignIn'
import SignUpPage from '@/pages/SignUp/signUp'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AuthGuard } from './guards'

setUpAxiosConfig()

const router = createBrowserRouter([
  {
    element: <RootPage />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        element: <AuthGuard />,
        children: [
          {
            path: 'sign-in',
            element: <SignInPage />
          },
          {
            path: 'sign-up',
            element: <SignUpPage />
          }
        ]
      },
      {
        path: 'email-verification/:verificationToken',
        element: <EmailVerificationPage />
      }
    ]
  }
])

export const Routing = () => <RouterProvider {...{ router }} />
