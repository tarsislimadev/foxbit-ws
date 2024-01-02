FROM python:3.10-slim

WORKDIR /app

COPY . .

RUN python3 -m pip install flet pyinstaller pillow

RUN flet pack main.py
