from django.urls import path
from . import views


urlpatterns = [
    path('', views.send_the_homepage, name='home'),
    path('sign_up', views.sign_up, name='sign_up'),
    path('sign_in', views.log_in, name='sign_in'),
    path('sign_out', views.log_out, name='sign_out'),
    path('profile', views.edit_user),
    path('curr_user', views.curr_user, name='curr_user'),
    path('profile_page', views.profile_page, name='profile_page'),
    path('jobs', views.jobs_applied_for, name='jobs_of_user'),
    path('jobs/<int:jobId>', views.update_job, name='updateJob'),
    path('cardjobs/<int:jobId>', views.update_card_job),
    path('jobsApplied', views.job_applied),
    path('jobsInterested', views.job_interested),
    path('jobsInterviewed', views.job_interviewed),
    path('jobsOffered', views.job_offered),
    path('job/applyClicked/<int:jobId>', views.apply_clicked),
    path('interviews', views.interviews, name='interviews_of_user'),
    path('forums', views.posts, name='forums_for_user'),
    path('posts', views.posts, name='all_posts_on_forum'),
    path('posts/<int:postId>', views.update_post),
    path('userAuthenticated', views.check_authentication),
    path('jobSearch/<str:jobName>', views.job_search),
    path('comments', views.comments, name='comments'),
    path('replies', views.replies_to_comments, name='replies'),
]
