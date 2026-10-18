// Single source of truth. Edit here; components never need to change.
const GH = 'https://github.com/cheranrajamanikam'
export const personal = {
  name: 'Cheran Rajamanikam', roles: 'AI/ML Engineer · Full-Stack Developer · Researcher',
  tagline: 'Building intelligent systems that turn ideas into working software.',
  intro: "I'm a 3rd-year Artificial Intelligence and Machine Learning engineering student based in Bengaluru, building AI-powered applications, full-stack systems and research-driven solutions.",
  status: 'AVAILABLE FOR INTERNSHIPS · 2026', location: 'Bengaluru, India',
  email: 'cheranrajamanikam03@gmail.com', phone: '+91 7619231249',
  github: GH, linkedin: 'https://www.linkedin.com/in/cheran-rajamanikam/',
  resume: '/resume.pdf', // replace public/resume.pdf
  statement: 'AI/ML engineer building at the intersection of software, research and intelligent systems.',
  about: ['I am a 3rd-year Artificial Intelligence and Machine Learning engineering student focused on building practical AI systems and understanding the engineering behind them.'],
  focus: ['Machine Learning','Generative AI','Computer Vision','LLM applications','Retrieval-Augmented Generation','Quantum Machine Learning','Full-Stack Development','AI Research'],
}
export const stats = [{ value: '3', label: 'Publications' }, { value: '8.1', label: 'CGPA' }, { value: '3rd Year', label: 'BE AI & ML' }, { value: 'IEEE', label: 'Research publication' }]
const TBD = 'Add measured results here once available.'
export interface Project { name: string; tagline: string; description: string; problem: string; solution: string; tech: string[]; features?: string[]; highlight?: string; architecture: string; implementation: string; results: string; future: string; github: string; demo?: string; featured?: boolean }
export const projects: Project[] = [
  { name: 'ResearchMind', featured: true, tagline: 'Local-first AI research workspace.',
    description: 'A local-first AI research companion that helps users explore research papers using semantic search, retrieval-augmented generation and grounded evidence.',
    problem: 'LLM research tools often generate plausible citations that do not exist, and send private papers to the cloud.',
    solution: 'Retrieval-first workflow running locally. The model answers from retrieved excerpts; it never writes citations itself.',
    highlight: 'The LLM does not write citations. Retrieved evidence identifiers are resolved by the backend into the actual paper, page and excerpt.',
    tech: ['Python','FastAPI','React','Vite','Tailwind','SQLite','Ollama','Embeddings','RAG'],
    architecture: 'React client → FastAPI backend → SQLite store with embeddings → local Ollama models. Excerpt IDs are resolved server-side into paper, page and quote.',
    implementation: 'PDF ingestion, chunking with page tracking, semantic search over embeddings, and a citation resolver that maps excerpt IDs to source records.',
    results: TBD, future: 'Evaluation harness for retrieval quality, annotation tools, multi-paper comparison.', github: GH },
  { name: 'Traffic Co-Driver AI', tagline: 'AI-powered intelligent driving assistant.', description: 'An AI-powered intelligent driving assistant designed to provide navigation assistance, route suggestions and conversational interaction.', problem: '', solution: '', features: ['GPS/map integration', 'Route suggestions', 'Voice assistant', 'AI interaction', 'Traffic-aware assistance'], tech: ['React', 'Node.js', 'AI APIs', 'Maps/GPS', 'Voice AI'], architecture: '', implementation: '', results: '', future: '', github: GH },
  { name: 'MotoCompanion', tagline: 'Motorcycle safety and assistance.', description: 'An AI/ML-enabled motorcycle safety and assistance application.', problem: '', solution: '', features: ['Emergency SOS', 'Crash detection', 'Ride matching', 'Community engagement', 'Events/challenges', 'Document verification'], tech: ['React', 'Node.js', 'Express', 'AI/ML', 'OCR/API integrations'], architecture: '', implementation: '', results: '', future: '', github: GH },
  { name: 'AI Study Planner', tagline: 'Full-stack study planning.', description: 'A full-stack study planning application that helps students organize study activities and manage tasks through structured schedules.', problem: '', solution: '', tech: ['Frontend', 'Backend', 'Database'], architecture: '', implementation: '', results: '', future: '', github: GH },
  { name: 'RAG Knowledge Assistant', tagline: 'Intelligent RAG-powered knowledge assistant.', description: 'A Retrieval-Augmented Generation system over domain-specific document corpora, using embedding-based semantic search and FAISS vector stores for contextual question answering. Uses multilingual transformer models to support regional-language queries.', problem: '', solution: '', tech: ['RAG', 'FAISS', 'Embeddings', 'Transformers', 'Python'], architecture: '', implementation: '', results: '', future: '', github: GH },
  { name: 'Quantum Machine Learning', tagline: 'Hybrid quantum-classical classification.', description: 'A research-oriented quantum machine learning project exploring hybrid quantum-classical approaches for classification.', problem: '', solution: '', tech: ['Qiskit', 'PennyLane', 'QSVM', 'VQC', 'PCA', 'Python', 'Scikit-learn'], architecture: '', implementation: '', results: '', future: '', github: GH },
]
export const research = [
  { title: 'Hybrid Quantum-Classical Framework for Breast Cancer Detection Using PCA-Optimized Quantum Feature Encoding and QSVM', area: 'Quantum Machine Learning · Medical AI', status: 'Publication details available on request.', description: 'Hybrid quantum-classical approach to breast cancer detection using PCA-optimized quantum feature encoding with QSVM.' },
  { title: 'Hybrid Quantum-Classical Deep Learning Framework for Brain Tumor Classification Using MRI Images', area: 'Computer Vision · AI-assisted healthcare', status: 'Publication details available on request.', description: 'Hybrid quantum-classical deep learning framework for classifying brain tumors from MRI images.' },
  { title: 'Alpha-Synuclein Biosensing with Dual-Mode Plasmonic Micro-Ring Biosensor to Diagnose Parkinson Disease in Early Stages', area: 'Biosensing', status: 'Published in IEEE · Co-author', description: 'Dual-mode plasmonic micro-ring biosensor for alpha-synuclein biosensing toward early Parkinson disease diagnosis.' }]
// TODO: paste your exact resume bullets into `bullets` (I could not read the resume file).
export const experience = [
  { period: 'Jun 2026 – Jul 2026', role: 'Machine Learning Intern', company: 'Syntecxhub · Remote', description: 'Machine learning models, classification, feature engineering, model evaluation, preprocessing, deployment and performance monitoring.' },
  { period: '2025 – Present', role: 'Artificial Intelligence Intern', company: 'DecodeLabs · Remote', description: 'Generative AI pipelines, LLMs, prompt optimization and evaluation, data analytics, AI module integration, GenAI tools and frameworks, technical documentation.' }]
export const skills: Record<string, string[]> = {
  'AI / Machine Learning': ['Python','Machine Learning','Deep Learning','NLP','Computer Vision','TensorFlow','Keras','Scikit-learn','Hugging Face Transformers'],
  'Generative AI': ['LLMs','RAG','Prompt Engineering','FAISS','Vector Databases','LangChain'],
  'Quantum ML': ['Qiskit','PennyLane','QSVM','VQC','PCA','Quantum-Classical ML'],
  'Full Stack / Backend': ['React','JavaScript','Django','FastAPI','REST APIs','Node.js','Express.js'],
  Data: ['Pandas','NumPy','Matplotlib','SQL','MongoDB','SQLite','Jupyter','Data Analysis','Feature Engineering'],
  'Cloud / Tools': ['AWS','Git','GitHub','VS Code','Unreal Engine','Ollama']}
export const learning = ['AI Engineering','Full-Stack Development','LLM Applications','RAG','Computer Vision','Quantum ML']
export const certifications = [
  { title: 'AI Fundamentals: Foundations for Understanding AI', issuer: 'IBM SkillsBuild', date: 'May 2026' },
  { title: 'Lifelong Professional Skills', issuer: 'IBM SkillsBuild', date: 'May 2026' },
  { title: 'AWS Solutions Architecture Job Simulation', issuer: 'Amazon Web Services via Forage', date: 'Dec 2024' }]
export const education = { school: 'The Oxford College of Engineering', degree: 'Bachelor of Engineering — Artificial Intelligence and Machine Learning', years: '2024 – 2028', university: 'Visvesvaraya Technological University (VTU)', cgpa: '8.1', distinction: 'First Class Distinction' }
export const earlier = [
  { school: 'Christ University, Bengaluru', program: 'Pre-University Course (PUC) — Physics, Chemistry, Biology, Literature, Mathematics', years: '2022 – 2024', grade: '82%', activities: ['Student Welfare Office (SWO)','Discipline Committee','Class Cricket Team'] },
  { school: 'DBM and RJS High School', program: 'School', years: '2010 – 2022', grade: '93%', activities: ['CMCA social awareness club','Kindle read to lead program','Literature Club','Math Club','Student Council (core member)'] }]
export const nav = ['About','Projects','Research','Experience','Skills','Education','Contact']
