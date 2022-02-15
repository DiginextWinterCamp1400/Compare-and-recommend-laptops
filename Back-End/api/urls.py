from django.urls import path
from .views import SearchLaptop, Recommend_Segment, Register

urlpatterns=[
    path('search/',SearchLaptop.as_view()),
    path('recommend/',Recommend_Segment.as_view()),
    path('register/<int:pk>',Register.as_view()),
]