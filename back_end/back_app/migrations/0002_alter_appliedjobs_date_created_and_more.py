# Generated by Django 4.0.5 on 2022-08-30 21:41

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('back_app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='appliedjobs',
            name='date_created',
            field=models.DateTimeField(default=datetime.datetime(2022, 8, 30, 16, 41, 2, 506820)),
        ),
        migrations.AlterField(
            model_name='comments_to_post',
            name='date_created',
            field=models.DateTimeField(default=datetime.datetime(2022, 8, 30, 16, 41, 2, 509902)),
        ),
        migrations.AlterField(
            model_name='interview',
            name='interview_date',
            field=models.DateTimeField(default=datetime.datetime(2022, 8, 30, 16, 41, 2, 508185)),
        ),
        migrations.AlterField(
            model_name='posts',
            name='date_created',
            field=models.DateTimeField(default=datetime.datetime(2022, 8, 30, 16, 41, 2, 509062)),
        ),
        migrations.AlterField(
            model_name='replies_to_comment',
            name='date_created',
            field=models.DateTimeField(default=datetime.datetime(2022, 8, 30, 16, 41, 2, 510894)),
        ),
    ]