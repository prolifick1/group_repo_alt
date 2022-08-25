from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
<<<<<<< HEAD
from .models import AppUser, AppliedJobs, Interview, Posts
=======
from .models import AppUser, AppliedJobs, Interview, Post
>>>>>>> bd42311 (added changes)

admin.site.register(AppUser, UserAdmin)
admin.site.register(AppliedJobs)
admin.site.register(Interview)
<<<<<<< HEAD
admin.site.register(Posts)
=======
admin.site.register(Post)
>>>>>>> bd42311 (added changes)
