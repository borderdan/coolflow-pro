import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import { QueryProvider } from './providers/QueryProvider'
import { AuthProvider } from './providers/AuthProvider'

const Layout = () => (
  <div className="min-h-screen bg-gray-950 text-gray-100">
    <Outlet />
  </div>
)

function App() {
  return (
    <QueryProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<div>Home</div>} />
              <Route path="/dashboard" element={<div>Dashboard</div>} />
              <Route path="/customers" element={<div>Customers</div>} />
              <Route path="/customers/:id" element={<div>Customer Details</div>} />
              <Route path="/properties/:id" element={<div>Property Details</div>} />
              <Route path="/schedule" element={<div>Schedule</div>} />
              <Route path="/estimates" element={<div>Estimates</div>} />
              <Route path="/estimates/:id" element={<div>Estimate Details</div>} />
              <Route path="/invoices" element={<div>Invoices</div>} />
              <Route path="/invoices/:id" element={<div>Invoice Details</div>} />
              <Route path="/pricebook" element={<div>Pricebook</div>} />
              <Route path="/agreements" element={<div>Agreements</div>} />
              <Route path="/technician" element={<div>Technician</div>} />
              <Route path="/settings" element={<div>Settings</div>} />
              <Route path="/login" element={<div>Login</div>} />
              <Route path="/signup" element={<div>Signup</div>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </QueryProvider>
  )
}

export default App
