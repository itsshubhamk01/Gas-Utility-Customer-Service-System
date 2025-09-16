# Gas Utility Backend (Django + DRF)

## Quick setup (local, development)

1. Create virtualenv and install dependencies:
```bash
python -m venv venv
source venv/bin/activate  # on Windows use `venv\Scripts\activate`
pip install -r requirements.txt
```

2. Run migrations and create superuser:
```bash
cd backend
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

3. API endpoints:
- JWT token: POST /api/auth/token/  (username, password)
- Service Requests: /api/service-requests/
- Bills: /api/bills/

Note: settings.py uses SQLite by default for ease of local testing.
