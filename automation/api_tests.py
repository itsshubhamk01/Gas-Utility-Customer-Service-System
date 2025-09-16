import requests
BASE = 'http://localhost:8000'
def test_health():
    r = requests.get(BASE + '/api/service-requests/')
    assert r.status_code in (200,401)  # if unauthenticated, DRF returns 401

if __name__ == '__main__':
    print('Run with pytest: pytest api_tests.py -q')
