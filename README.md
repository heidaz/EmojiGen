# Emoji Generator Website

A simple and fun web application to browse, search, and create text-based emoji/kaomoji.

## Features

- Browse a collection of predefined text emoji
- Search emoji by name/emotion
- Copy emoji to clipboard with a single click
- Create your own custom emoji with the emoji builder
- Generate random emoji with animation effects
- Dark mode support for comfortable viewing
- Categorized emoji collection with filtering

## Available Emoji

This application includes various text-based emoji like:

- ヽ(＾Д＾)ﾉ (Excited)
- (╯°□°）╯︵ ┻━┻ (Table Flip)
- (¬‿¬) (Smirk)
- (≧◡≦) (Happy)
- (°▽°) (Joyful)
- ( ︶︿︶) (Upset)
- And many more!

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository
```
git clone https://github.com/yourusername/emoji-generator.git
cd emoji-generator
```

2. Install dependencies
```
npm install
```

3. Run the application in development mode
```
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Building for Production

```
npm run build
```

The build files will be in the `build` folder.

## Deployment on Railway

This project is configured for easy deployment on [Railway](https://railway.app/).

### Steps to deploy:

1. Create an account on Railway
2. Install Railway CLI (optional)
```
npm i -g @railway/cli
```

3. Login to Railway
```
railway login
```

4. Link your project to Railway
```
railway link
```

5. Deploy your project
```
railway up
```

Alternatively, you can connect your GitHub repository to Railway for automatic deployments.

1. Go to Railway dashboard
2. Click "New Project"
3. Select "Deploy from GitHub"
4. Select your repository
5. Railway will automatically detect and deploy your project

## Technologies Used

- React
- TypeScript
- Express (for production server)
- CSS3 (with Grid and Flexbox)

## License

MIT 