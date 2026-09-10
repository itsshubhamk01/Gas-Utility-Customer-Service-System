# Gas Utility Frontend (React)

## Quick setup (local)
1. Install dependencies:
```bash
cd frontend
npm install
```
2. Start dev server:
```bash
npm start
```
The React app expects the Django backend to be available at the same origin (we used relative `/api/...` URLs). For local development you can run Django on port 8000 and use a proxy in package.json if needed.
