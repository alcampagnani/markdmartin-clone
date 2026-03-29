import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { PracticeAreas } from './components/PracticeAreas'
import { Endorsements } from './components/Endorsements'
import { Testimonials } from './components/Testimonials'
import { ConsultationForm } from './components/ConsultationForm'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <PracticeAreas />
        <Endorsements />
        <Testimonials />
        <ConsultationForm />
      </main>
      <Footer />
    </div>
  )
}

export default App
