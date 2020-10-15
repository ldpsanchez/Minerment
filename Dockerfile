# Pulling an official image of python
FROM python:3.8.5-alpine3.12

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
RUN apk update \
&& apk add postgresql-dev \
gcc \
python3-dev \
musl-dev \
nodejs \
npm \
yarn \
&& python -m pip install -U pip \ 
&& python -m pip install -r requirements.txt --use-feature=2020-resolver

# Entrypoint
ENTRYPOINT [ "python", "/usr/src/app/entrypoint.py" ]