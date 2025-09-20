# core/urls.py

from django.urls import path
from.import views #Importa as views do nosso core

urlpatterns = [
    path('', views.home, name='home')
]