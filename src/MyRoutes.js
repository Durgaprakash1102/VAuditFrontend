import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Components/Login'
import Rank from './Components/Rank'
import Otp from './Components/Otp'
import Home from './Components/Home'
import Aboutus from './Components/Aboutus'
import Features from './Components/Features'
import Pricing from './Components/Pricing'
import Contentexplorer from './Components/Contentexplorer'
import Contactus from './Components/Contactus'
import Payperclick from './Components/Payperclick'
import Searchengineoptimisation from './Components/Searchengineoptimisation'
import Mainfile from './Components/Mainfile'
import Signup from './Components/Signup'
import Searchenginemarketing from './Components/Searchenginemarketing'
import Socialmediamarketing from './Components/Socialmediamarketing'
import Linkbuilding from './Components/Linkbuilding'
import Dashboardmain from './Pages/Dashboardmain'
import LinkExplorer from './Components/LinkExplorer'
import Competitoranalysis from './Components/CompitorAnalysis'
import Keywordexplorer from './Components/Keywordexplorer'
import Prac from './Components/Prac'
import Blogs from './Components/Blogs'
import ForgotPassword from './Components/Forgotpassword'
import Faq from './Components/Faq'

function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="signupform" element={<Signup />} />
      <Route path="rank" element={<Rank />} />
      <Route path="dashboardmain" element={<Dashboardmain />} />
      <Route path="contentexplorer" element={<Contentexplorer />} />
      <Route path="payperclick" element={<Payperclick />} />
      <Route path="searchengineoptimisation" element={<Searchengineoptimisation />} />
      <Route path="mainfile" element={<Mainfile />} />
      <Route path="aboutus" element={<Aboutus />} />
      <Route path="otp" element={<Otp />} />
      <Route path="features" element={<Features />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path="contactus" element={<Contactus />} />
      <Route path="linkExplorer" element={<LinkExplorer />} />
      <Route path="competitoranalysis" element={<Competitoranalysis />} />
      <Route path="blogs" element={<Blogs />} />
      <Route path="faq" element={<Faq />} />
      <Route path="searchenginemarketing" element={<Searchenginemarketing />} />
      <Route path="socialmediamarketing" element={<Socialmediamarketing />} />
      <Route path="linkbuilding" element={<Linkbuilding />} />
      <Route path="keywordexplorer" element={<Keywordexplorer />} />
      <Route path="prac" element={<Prac />} />
      <Route path="forgotpassword" element={<ForgotPassword />} />
    </Routes>
  )
}

export default MyRoutes
