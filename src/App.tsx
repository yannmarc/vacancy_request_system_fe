import './App.css'
import './index.css'

import { Routes, Route, Navigate } from 'react-router'
import { EmployeeDashboard } from './pages/employeeDashboard'
import EmployerDashboard from './pages/employerDashboard'
import { Layout } from './components/layout'
import { useUser } from './context/userContext'
import { EmployeeTypes } from './consts'
import { RequestDetail } from './pages/requestDetail'

function App() {
  const {user} = useUser()

  console.log(user)

  return (
    <Routes>
     <Route path="/" element={<Layout />}>
        {user === EmployeeTypes.admin ? (
          <Route index element={<Navigate to="/admin" replace />} />
        ) : (
          <Route index element={<Navigate to="/employee" replace />} />
        )}

        <Route path="admin" element={<EmployerDashboard />} />
        <Route path="employee" element={<EmployeeDashboard />} />
        <Route path="/request-request/:leaveId" element={<RequestDetail />} />
      </Route>
    </Routes>
  )
}

export default App
