import EmailVerificationPage from '@/pages/EmailVerification/EmailVerification'
import HomePage from '@/pages/Home/Home'
import SignInPage from '@/pages/SignIn/SignIn'
import SignUpPage from '@/pages/SignUp/signUp'
import { UserProvider } from '@/services/store/context/user'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <UserProvider><Outlet /></UserProvider>,
    children: [
      {
        path: 'home',
        element: <HomePage />
      },
      {
        path: 'sign-in',
        element: <SignInPage />
      },
      {
        path: 'sign-up',
        element: <SignUpPage />
      },
      {
        path: 'email-verification/:verificationToken',
        element: <EmailVerificationPage />
      }
    ]
  }
])

export const Routing = () => <RouterProvider {...{ router }} />
