import bannerImage from './assets/banner-image.webp'
import './App.scss'
import Header from './components/header/header'
import Banner from './components/banner/banner'
import Dashboard from './components/dashboard/dashboard'
import Footer from './components/footer/footer'

function App() {
  return (
    <>
    <Header />    
    <Banner 
      bannerTitle="Venha conhecer nossas promoções"
      bannerSubtitle="50% Off nos produtos"
      buttonText="Ver produto"
      bannerImage = {bannerImage}
    />
    <Dashboard/>
    <Footer/>
    </>
  )
}

export default App
