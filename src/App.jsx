import MissionaryHomePage from './Pages/HomePageFolder/MissionaryHomePage/MissionaryHomePage'
import LandingPage from "./Pages/LandingPage/LandingPage"
import { Routes, Route } from "react-router-dom"
import PageLayout from "./Layout/PageLayout/pageLayout"
import AuthDonorForm from "./Pages/AuthForm/AuthDonorPages/AuthDonorForm"
import AuthMissionaryForm from "./Pages/AuthForm/AuthMissionaryPages/AuthMissionaryForm"
import AuthSocialProjectForm from "./Pages/AuthForm/AuthSocialProjectPages/AuthSocialProjectForm"
import ResetPassword from "./Pages/AuthForm/ResetPassword/ResetPassword"

function App() {
  return (
    <>
      <PageLayout>
        <Routes>
          <Route path="/" element={<MissionaryHomePage />} />
          <Route path="/LandingPage" element={<LandingPage />} />
          <Route path="/donorSignPage" element={<AuthDonorForm />} />
          <Route path="/missionarySignPage" element={<AuthMissionaryForm />} />
          <Route path="/socialProjectSignPage" element={<AuthSocialProjectForm />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
        </Routes>
      </PageLayout>
    </>
  )
}

export default App