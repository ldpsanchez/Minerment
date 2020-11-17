# Pulling an official image of python
FROM python:3.9.0-slim-buster

# Exposing listening port
EXPOSE 8080

# Working directory
WORKDIR /usr/src/app

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1 PYTHONUNBUFFERED=1

# Copying files to the container
COPY ./monitoring_web_application/. .
COPY ./requirements.txt .

# Commands to be executed
RUN apt-get update \
&& apt-get install -y apt-utils postgresql-client \
libpq-dev \
python3-dev \
build-essential \
netcat \
&& apt-get install -y aptitude \
&& pip install -U pip \ 
&& pip install -r requirements.txt

# Entrypoint
ENTRYPOINT [ "python", "/usr/src/app/entrypoint.py" ]