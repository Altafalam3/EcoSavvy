from django.urls import path
from .views import user_signup, user_login
from .views import PredictionView

urlpatterns = [
    path('signup/', user_signup),
    path('login/', user_login),
    # path('results/', ResultsListCreate.as_view(), name='results-list'),
    path('prediction/', PredictionView.as_view(), name='prediction'),

]
