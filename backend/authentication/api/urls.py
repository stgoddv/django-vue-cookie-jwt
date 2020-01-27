from django.contrib import admin
from django.urls import path, include

from .views import ExampleView

urlpatterns = [
    path('', ExampleView.as_view()),
]
