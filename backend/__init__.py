import os
from flask import Flask
from .config import Config

app = Flask(__name__, static_url_path='/')

app.config.from_object(Config)

@app.route('/')
def hello():
    return "Hello World"