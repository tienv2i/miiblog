#!/usr/bin/env bash
source .venv/bin/activate
export PYTHONDONTWRITEBYTECODE=1
sudo nc -z localhost 5432 || sudo service postgresql start
python manage.py runserver 0.0.0.0:8000