import { useEffect, useState } from 'react'
import WebApp from '@twa-dev/sdk'

function App() {
  const [userInfo, setUserInfo] = useState<{
    firstName?: string
    lastName?: string
    username?: string
  } | null>(null)

  useEffect(() => {
    // Initialize Telegram WebApp
    WebApp.ready()

    // Expand to full height
    WebApp.expand()

    // Get user info
    const tgUser = WebApp.initDataUnsafe.user
    if (tgUser) {
      setUserInfo({
        firstName: tgUser.first_name,
        lastName: tgUser.last_name,
        username: tgUser.username,
      })
    }

    // Set header color to match theme
    WebApp.setHeaderColor('#4A90E2')

  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-backgroundSecondary to-blue-50 flex flex-col">
      {/* Header */}
      <header className="pt-8 pb-6 px-6 text-center">
        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white shadow-lg flex items-center justify-center">
          <span className="text-5xl">🧘</span>
        </div>
        <h1 className="text-3xl font-bold text-textPrimary mb-2">
          MindFool<span className="text-primary">.Games</span>
        </h1>
        <p className="text-textSecondary">Your daily mental reset</p>

        {userInfo && (
          <div className="mt-4 text-sm text-textSecondary">
            Welcome, {userInfo.firstName}! 👋
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 px-6 pb-6">
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-4">
          <div className="text-center mb-6">
            <span className="text-4xl mb-3 block">✨</span>
            <h2 className="text-xl font-semibold text-textPrimary mb-2">
              5 mindfulness practices
            </h2>
            <p className="text-textSecondary">
              Each session is 2-3 minutes. Find what works for you.
            </p>
          </div>

          <div className="space-y-3">
            <div className="p-4 border-2 border-blue-100 rounded-xl hover:border-primary transition-colors">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🎈</span>
                <div>
                  <h3 className="font-semibold text-textPrimary">Balloon Breathing</h3>
                  <p className="text-sm text-textSecondary">Follow the rhythm</p>
                </div>
              </div>
            </div>

            <div className="p-4 border-2 border-blue-100 rounded-xl hover:border-primary transition-colors">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🚶</span>
                <div>
                  <h3 className="font-semibold text-textPrimary">Walking Meditation</h3>
                  <p className="text-sm text-textSecondary">Count your steps</p>
                </div>
              </div>
            </div>

            <div className="p-4 border-2 border-blue-100 rounded-xl hover:border-primary transition-colors">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🔢</span>
                <div>
                  <h3 className="font-semibold text-textPrimary">Number Bubbles</h3>
                  <p className="text-sm text-textSecondary">Tap 1 to 10</p>
                </div>
              </div>
            </div>

            <div className="p-4 border-2 border-blue-100 rounded-xl hover:border-primary transition-colors">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🔔</span>
                <div>
                  <h3 className="font-semibold text-textPrimary">Gong Listening</h3>
                  <p className="text-sm text-textSecondary">Listen deeply</p>
                </div>
              </div>
            </div>

            <div className="p-4 border-2 border-blue-100 rounded-xl hover:border-primary transition-colors">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🪜</span>
                <div>
                  <h3 className="font-semibold text-textPrimary">Counting Ladder</h3>
                  <p className="text-sm text-textSecondary">Count with breath</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-textSecondary">
          <p>Running in Telegram WebApp</p>
          <p className="mt-1">Version: {WebApp.version}</p>
        </div>
      </main>
    </div>
  )
}

export default App
