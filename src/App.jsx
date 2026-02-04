import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { TransitionProvider } from './components/TransitionContext.jsx'
import { FloatingHearts } from './components/FloatingHearts.jsx'
import { PageTransition } from './components/PageTransition.jsx'
import { LoveCursor } from './components/LoveCursor.jsx'
import { BackgroundAudio } from './components/BackgroundAudio.jsx'
import { HomePage } from './pages/HomePage.jsx'
import { PicturesPage } from './pages/PicturesPage.jsx'
import { MessagePage } from './pages/MessagePage.jsx'

export default function App() {
  const location = useLocation()

  return (
    <TransitionProvider>
      <div className="min-h-screen flex flex-col">
        <LoveCursor />
        <FloatingHearts />
        <BackgroundAudio />
        <main
          className="relative z-[1] w-full max-w-[1100px] mx-auto px-5 sm:px-6 pt-8 sm:pt-12 pb-16 flex-1"
          aria-label="Main content"
        >
          {/* key ensures fresh entrance animation per route */}
          <PageTransition routeKey={location.pathname}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<HomePage />} />
              <Route path="/pictures" element={<PicturesPage />} />
              <Route path="/message" element={<MessagePage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </PageTransition>
        </main>
      </div>
    </TransitionProvider>
  )
}
