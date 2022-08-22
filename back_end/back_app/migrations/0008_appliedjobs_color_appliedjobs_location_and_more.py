# Generated by Django 4.0.5 on 2022-08-22 14:44

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('back_app', '0007_remove_appuser_fist_name_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='appliedjobs',
            name='color',
            field=models.CharField(max_length=250, null=True),
        ),
        migrations.AddField(
            model_name='appliedjobs',
            name='location',
            field=models.CharField(max_length=250, null=True),
        ),
        migrations.AddField(
            model_name='appliedjobs',
            name='salary',
            field=models.CharField(max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='appliedjobs',
            name='date_created',
            field=models.DateTimeField(default=datetime.datetime(2022, 8, 22, 14, 44, 14, 363715)),
        ),
        migrations.AlterField(
            model_name='forum',
            name='date_created',
            field=models.DateTimeField(default=datetime.datetime(2022, 8, 22, 14, 44, 14, 364088)),
        ),
        migrations.AlterField(
            model_name='interview',
            name='interview_date',
            field=models.DateTimeField(default=datetime.datetime(2022, 8, 22, 14, 44, 14, 363941)),
        ),
    ]
