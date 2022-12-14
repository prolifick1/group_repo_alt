# Generated by Django 4.0.5 on 2022-08-31 02:42

import datetime
from django.conf import settings
import django.contrib.auth.models
import django.contrib.auth.validators
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='AppUser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('username', models.CharField(error_messages={'unique': 'A user with that username already exists.'}, help_text='Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.', max_length=150, unique=True, validators=[django.contrib.auth.validators.UnicodeUsernameValidator()], verbose_name='username')),
                ('is_staff', models.BooleanField(default=False, help_text='Designates whether the user can log into this admin site.', verbose_name='staff status')),
                ('is_active', models.BooleanField(default=True, help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.', verbose_name='active')),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now, verbose_name='date joined')),
                ('first_name', models.CharField(default='unkown', max_length=50)),
                ('last_name', models.CharField(default='unknown', max_length=50)),
                ('job_title', models.CharField(default='unknown', max_length=100)),
                ('email', models.EmailField(max_length=255, unique=True, verbose_name='email address')),
                ('profile_picture', models.CharField(default='https://icon-library.com/images/default-profile-icon/default-profile-icon-24.jpg', max_length=250)),
                ('residing_state', models.CharField(max_length=250, null=True)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.permission', verbose_name='user permissions')),
            ],
            options={
                'verbose_name': 'user',
                'verbose_name_plural': 'users',
                'abstract': False,
            },
            managers=[
                ('objects', django.contrib.auth.models.UserManager()),
            ],
        ),
        migrations.CreateModel(
            name='Comments_To_Post',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(default='New Forum', max_length=150)),
                ('date_created', models.DateTimeField(default=datetime.datetime(2022, 8, 30, 21, 42, 25, 353493))),
                ('description', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Replies_To_Comment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date_created', models.DateTimeField(default=datetime.datetime(2022, 8, 30, 21, 42, 25, 353653))),
                ('description', models.TextField()),
                ('comment', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='back_app.comments_to_post')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Posts',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(default='first_name', max_length=150)),
                ('last_name', models.CharField(default='last_name', max_length=150)),
                ('title', models.CharField(default='New Forum', max_length=150)),
                ('date_created', models.DateTimeField(default=datetime.datetime(2022, 8, 30, 21, 42, 25, 353328))),
                ('company_name', models.CharField(max_length=100)),
                ('job_title', models.CharField(max_length=100)),
                ('description', models.TextField()),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Interview',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('interview_date', models.DateTimeField(default=datetime.datetime(2022, 8, 30, 21, 42, 25, 353120))),
                ('completed', models.BooleanField(default=False)),
                ('company_name', models.CharField(max_length=100)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='comments_to_post',
            name='forum',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='back_app.posts'),
        ),
        migrations.AddField(
            model_name='comments_to_post',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.CreateModel(
            name='AppliedJobs',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('completed', models.BooleanField(default=False)),
                ('date_created', models.DateTimeField(default=datetime.datetime(2022, 8, 30, 21, 42, 25, 352849))),
                ('date_completed', models.CharField(max_length=100, null=True)),
                ('deadline', models.DateField(null=True)),
                ('color', models.CharField(max_length=250, null=True)),
                ('salary', models.CharField(max_length=250, null=True)),
                ('location', models.CharField(max_length=250, null=True)),
                ('company_name', models.CharField(max_length=100)),
                ('job_title', models.CharField(max_length=150)),
                ('description', models.TextField()),
                ('company_link', models.CharField(max_length=255)),
                ('interview_scheduled', models.BooleanField(default=False)),
                ('job_offer', models.BooleanField(default=False)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
