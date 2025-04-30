
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Jobs from './components/Jobs'
import Browse from './components/Browse'
import Profile from './components/Profile'
import JobDescription from './components/JobDescription'
import Companies from './components/admin/Companies'
import CompanyCreate from './components/admin/CompanyCreate'
import CompanySetup from './components/admin/CompanySetup'
import AdminJobs from './components/admin/AdminJobs';
import PostJob from './components/admin/PostJob'
import Applicants from './components/admin/Applicants'
import ProtectedRoute from './components/admin/ProtectedRoute'
import Learn from './components/Learn'
import Signup from './components/auth/Signup'
import Login from './components/auth/Login'
const appRouter  = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<Signup/>
  },
  {
    path:'/Jobs',
    element:<Jobs/>
  },
  {
    path:'/description/:id',
    element:<JobDescription/>
  },

  {
    path:'/browse',
    element:<Browse/>
  },
  {
    path:'/profile',
    element:<Profile/>
  },
  {
    path:'/learn',
    element:<Learn/>
  },


  // Admin Part

  {
    path:"/admin/companies",
    element:<ProtectedRoute><Companies/></ProtectedRoute>
  },
  {
    path:"/admin/companies/create",
    element:<CompanyCreate/>
  } ,
  {
    path:"/admin/companies/:id",
    element:<CompanySetup/>
  } ,
  {
    path:"/admin/jobs",
    element:<AdminJobs/>
  } ,
  {
    path:"/admin/jobs/create",
    element:<PostJob/>
  } ,
  {
    path:"/admin/jobs/admin/jobs/:id/applicants",
    element:<Applicants/>
  }

])
function App() {

  return (
    <>
   <RouterProvider router = {appRouter}/>
    </>
  )
}

export default App
