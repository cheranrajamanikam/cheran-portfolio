import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar'
import Cursor from './components/Cursor'
import Hero from './sections/Hero'
import { About, Projects, Research, Experience, Skills, Now, Education, Contact, Footer } from './sections/Sections'
export default function App() {
  return (<MotionConfig reducedMotion="user"><Cursor /><Navbar /><main><Hero /><About /><Projects /><Research /><Experience /><Skills /><Now /><Education /><Contact /></main><Footer /></MotionConfig>)
}
