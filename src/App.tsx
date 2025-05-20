import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './presentation/pages/SetupGuides'
import Layout from './presentation/Layout/Layout'
import SetupGuides from './presentation/pages/SetupGuides'
import TeamMembers from './presentation/pages/TeamMembers'
import Dashboard from './presentation/pages/Dashboard'
import Invoices from './presentation/pages/Invoices'
import Menu from './presentation/pages/Menu'
import Orders from './presentation/pages/Orders'
import Payments from './presentation/pages/Payments'
import ReportAnalysis from './presentation/pages/ReportAnalysis'
import Settings from './presentation/pages/Settings'
import { Provider } from 'react-redux'
import { store } from './app/store/store'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
      <Routes >
        <Route element={<Layout />}>
          <Route index path="/" element={<SetupGuides />} />
          <Route index path="/team-members" element={<TeamMembers />} />
          <Route index path="/dashboard" element={<Dashboard />} />
          <Route index path="/invoices" element={<Invoices />} />
          <Route index path="/menu" element={<Menu />} />
          <Route index path="/orders" element={<Orders />} />
          <Route index path="/payments" element={<Payments />} />
          <Route index path="/report-analysis" element={<ReportAnalysis />} />
          <Route index path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
          <Toaster />

    </Provider>
  )
}

export default App
