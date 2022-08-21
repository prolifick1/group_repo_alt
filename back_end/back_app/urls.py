from django.urls import path
from . import views


urlpatterns = [
    path('', views.send_the_homepage, name='home'),
    path('sign_up', views.sign_up, name='sign_up'),
    path('sign_in', views.log_in, name='sign_in'),
    path('sign_out', views.log_out, name='sign_out'),
    path('curr_user', views.curr_user, name='curr_user'),
    path('profile_page', views.profile_page, name='profile_page'),
    path('jobs', views.jobs_applied_for, name='jobs_of_user'),
    path('interviews', views.interviews, name='interviews_of_user'),
    path('forums', views.forums, name='forums_for_user'),
    path('userAuthenticated', views.check_authentication)
]
