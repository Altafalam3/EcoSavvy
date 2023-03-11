from django.urls import path
from .views import user_signup, user_login
from .views import results_api_view

urlpatterns = [
    path('signup/', user_signup),
    path('login/', user_login),
    # path('results/', ResultsListCreate.as_view(), name='results-list'),
    path('results/', results_api_view, name='results'),

]
