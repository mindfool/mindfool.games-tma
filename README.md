# MindFool.Games - Telegram Mini App

Telegram Mini App version of MindFool.Games - a mindfulness and mental wellness gaming platform.

## Overview

This is the Telegram Mini App (TMA) implementation that allows users to access MindFool.Games directly within Telegram. It shares the same UI/UX and core features as the web and native apps.

## Features

### MVP (Week 1-2)
- **Balloon Breathing Game**: 2-3 minute guided breathing exercises
- **Pre/Post Check-in System**: Track mental state before and after sessions
- **Reflection Notes**: Optional post-session journaling
- **Session History**: View past sessions and track progress over time

### Coming Soon
- Walking Meditation
- Gong Listening
- Number Bubbles
- Counting Ladder

## Tech Stack

- **Framework**: React + TypeScript
- **Telegram SDK**: @twa-dev/sdk
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Storage**: Telegram Cloud Storage API

## Related Repositories

- **Main App**: [mindfool/mindfool.games](https://github.com/mindfool/mindfool.games) - React Native (iOS/Android) + Expo Web
- **Spec Docs**: [mindfool/mindfool.games-spec-docs](https://github.com/mindfool/mindfool.games-spec-docs) - Product specifications
- **Marketing Site**: [mindfool/mindfool.games-web](https://github.com/mindfool/mindfool.games-web) - Next.js marketing website

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

The TMA is deployed on Vercel and accessible via Telegram Bot integration.

- **Production URL**: TBD
- **Telegram Bot**: @MindFoolGamesBot (TBD)

## Development

Follow the agent-os methodology as documented in the spec repository.

## License

Proprietary - © 2024 MindFool.Games
