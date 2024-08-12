import Image from 'next/image'
import Link from 'next/link'
import HeroSection from './components/ui/HeroSection'
import { FeaturedCourses } from './components/FeaturedCourses'
import WhyChooseUs from './components/WhyChooseUs'
import MusicSchoolTestimonials from './components/TestimonialCards'
import UpcomingWebinar from './components/UpcomingWebinar'
export default function Home() {
  return (
    <main className='min-h-screen bg-black/[0.95] antialiased bg-grid-white/[0,02]'>
 
 <HeroSection/>
 <FeaturedCourses/>
 <WhyChooseUs/>
 <MusicSchoolTestimonials />
 <UpcomingWebinar />
  </main>
   
  )
}
