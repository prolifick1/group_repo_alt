from operator import mod
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.http import HttpResponse
# Create your models here.

class AppUser(AbstractUser):
    name = models.CharField(max_length=250, null=False, default='unkown')
    last_name=models.CharField(max_length=250, null=False, default='unknown')
    job_title=models.CharField(max_length=250, null=False, default='unknown')
    email = models.EmailField(
        verbose_name='email address',
        max_length= 255,
        unique=True,
    )
    profile_picture=models.CharField(max_length=250, null=True)
    residing_state=models.CharField(max_length=250, null=True)
    
    USERNAME_FIELD= 'email'
    REQUIRED_FIELDS= []
    #line above means both email and password would be required