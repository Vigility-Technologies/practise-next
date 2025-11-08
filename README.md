# GEM Bid Finder - Next.js

A modern web application to fetch and browse all active tenders from the GEM (Government e-Marketplace) portal.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- A valid CSRF token from GEM portal

### Installation

1. **Install dependencies:**

```bash
cd nextjs-app
npm install
```

2. **Run the development server:**

```bash
npm run dev
```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📖 How to Use

1. **Get a CSRF Token:**

   - Open [https://bidplus.gem.gov.in/advance-search](https://bidplus.gem.gov.in/advance-search)
   - Open DevTools (F12) → Network tab
   - Perform any search
   - Find the `search-bids` request
   - Copy the `csrf_bd_gem_nk` value from Form Data

2. **Enter Details:**

   - Paste the CSRF token
   - Optionally set an end date to filter bids
   - Click "Fetch All Bids"

3. **Browse Results:**
   - View statistics (total categories, bids, etc.)
   - Click on any category to expand and see all bids
   - View or download bid documents directly

## 🏗️ Project Structure

```
nextjs-app/
├── app/
│   ├── api/
│   │   ├── fetch-bids/
│   │   │   └── route.ts          # API to fetch bids from GEM
│   │   └── download-document/
│   │       └── route.ts          # API to download bid documents
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Main page component
│   ├── page.module.css           # Page styles
│   └── globals.css               # Global styles
├── package.json
├── tsconfig.json
└── next.config.js
```

## 🎨 Features

- ✅ Fetch bids from all configured categories
- ✅ Filter by end date
- ✅ View bid statistics
- ✅ Expandable category sections
- ✅ View documents in new tab
- ✅ Download documents directly
- ✅ Responsive design
- ✅ Loading states and error handling

## 🔧 Configuration

The app reads categories from `../categories.json` (parent directory). Make sure this file exists and contains your category list.

## 🚨 Important Notes

- **CSRF Token expires after ~20 minutes** - You'll need to get a fresh token periodically
- **Rate Limiting** - The app includes 1-second delays between requests to be polite to the GEM server
- **Document URLs** - Documents are fetched from: `https://bidplus.gem.gov.in/showbidDocument/{id}`

## 📦 Building for Production

```bash
npm run build
npm start
```

## 🛠️ Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **CSS Modules** - Scoped styling
- **Server Components & API Routes** - Backend functionality

## 📝 API Endpoints

### POST /api/fetch-bids

Fetches all bids from configured categories.

**Request:**

```json
{
  "csrfToken": "your_token_here",
  "endDate": "2025-12-31" // optional
}
```

**Response:**

```json
{
  "stats": {
    "totalCategories": 15,
    "categoriesWithBids": 10,
    "totalBids": 45
  },
  "categories": [...]
}
```

### GET /api/download-document

Downloads a bid document.

**Query Parameters:**

- `id` - Document ID (required)
- `bidNumber` - Bid number for filename (optional)

---

**Built for hackathons** 🚀
