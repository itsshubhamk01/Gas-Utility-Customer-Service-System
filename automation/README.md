# Automation & QA

This folder contains example automation scripts.

## API tests (pytest + requests)
Run after backend is up (and optionally frontend):
```bash
pip install pytest requests
pytest api_tests.py -q
```

## Selenium tests (basic scaffold)
Selenium requires a browser driver (e.g., chromedriver) in PATH.
Install selenium: `pip install selenium`
Run `python selenium_test.py` to execute the sample UI flow.
