from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('api/', include('market.urls')),
    path("admin/", admin.site.urls),
]
