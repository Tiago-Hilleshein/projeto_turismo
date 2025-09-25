from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('atracoes/', views.atracoes, name='atracoes'),
    path('historia/', views.historia, name='historia'),
    path('cultura/', views.cultura, name='cultura'),
]
