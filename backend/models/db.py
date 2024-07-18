from flask_sqlalchemy import SQLAlchemy

import os
environment = os.environ.get("FLASK_ENV")
SCHEMA = os.environ.get("SCHEMA")