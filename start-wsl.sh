#!/usr/bin/env bash
source .venv/bin/activate
sudo service postgresql start
python manage.py runserver 0.0.0.0:8000