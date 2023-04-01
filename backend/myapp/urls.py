from django.urls import path
from .views import user_signup, user_login
from .views import prediction_view

from .views import PredictionList
urlpatterns = [
    path('signup/', user_signup),
    path('login/', user_login),
    path('prediction/', prediction_view),
    path('predictions/', PredictionList.as_view(), name='prediction-list'),

]
