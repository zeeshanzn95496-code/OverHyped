# OverHyped

A modern e-commerce website for tech products with a bold, energetic design.

## Project Structure

```
OverHyped/
├── backend/          # Express.js API server
│   ├── server.js     # Main server file
│   └── package.json
├── frontend/         # React frontend
│   ├── src/
│   │   ├── components/  # Reusable components
│   │   ├── pages/       # Page components
│   │   └── context/     # React context (Cart, Favorites, Theme)
│   └── package.json
└── README.md
```

## Features

- **Product Catalog** - Browse phones, audio, power banks, and accessories
- **Filtering** - Filter products by category
- **Search** - Search products by name or description
- **Sorting** - Sort by price (low/high) or rating
- **Shopping Cart** - Add items to cart
- **Favorites/Wishlist** - Save favorite products
- **Dark/Light Theme** - Toggle between themes
- **Responsive Design** - Works on mobile and desktop

## Getting Started

### Prerequisites
- Node.js installed
- npm or yarn

### Backend Setup

1. Navigate to backend folder:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm run dev
```

Server runs on `http://localhost:3000`

### Frontend Setup

1. Navigate to frontend folder:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

Frontend runs on `http://localhost:5173` (or the URL shown in terminal)

## API Endpoints

- `GET /health` - Health check endpoint
- `GET /tagline` - Get website tagline
- `GET /top4` - Get top 4 products
- `GET /accessories` - Get accessories list

## Technologies Used

### Backend
- Express.js
- CORS
- MongoDB (Mongoose)

### Frontend
- React 19
- React Router
- Vite
- Axios

## Available Scripts

### Backend
- `npm run dev` - Start server with nodemon

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Project Status

This is a learning project focused on:
- React fundamentals (components, state, props)
- API integration
- State management with Context API
- CSS styling
- Responsive design

## License

ISC
