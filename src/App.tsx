import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar'
import Cursor from './components/Cursor'
import Hero from './sections/Hero'
import { About, Gallery, Projects, Research, Experience, Skills, Now, Education, Contact, Footer } from './sections/Sections'
export default function App() {
  return (<MotionConfig reducedMotion="user"><Cursor /><Navbar /><main><Hero /><About /><Gallery /><Projects /><Research /><Experience /><Skills /><Now /><Education /><Contact /></main><Footer /></MotionConfig>)
}
