# core/urls.py

from django.urls import path
from.import views #Importa as views do nosso core

urlpatterns = [
    path('', views.index, name='home')
    path('', views.historia, name='historia')
    path('', views.home, name='cultura')
    path('', views.home, name='atracoes')
]


#urlpatterns = [
#    path("admin/", admin.site.urls),
#    path('', views.home),
#    path('atracoes/', views.atracoes),
#    path('galeria/', views.galeria)
#]