"""
ASGI config for monitoring_web_application project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.1/howto/deployment/asgi/
"""
import os
from ariadne.asgi import GraphQL
from django.core.asgi import get_asgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'monitoring_web_application.settings')


application = get_asgi_application()
