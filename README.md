# Gas Utility Customer Service System (Full-stack sample)

This repository contains a minimal full-stack example:
- Django + Django REST Framework backend (backend/)
- React + Tailwind frontend (frontend/)
- Automation scripts (automation/)

## Quick start (recommended order)

1. Backend
```bash
cd backend
python -m venv venv
source venv/bin/activate  # on Windows use venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver 0.0.0.0:8000
```

2. Frontend (in a new terminal)
```bash
cd frontend
npm install
npm start
```

3. Generate JWT token (POST /api/auth/token/) using the superuser credentials to access protected endpoints from the frontend.

4. Run automation tests:
- API tests with pytest: `pytest automation/api_tests.py -q`
- Selenium tests: `python automation/selenium_test.py` (requires chromedriver)

## Notes
- Database: SQLite by default (backend/db.sqlite3)
- This is a scaffold for demonstration and training. For production, change SECRET_KEY, DEBUG, allowed hosts, and use a production DB.
