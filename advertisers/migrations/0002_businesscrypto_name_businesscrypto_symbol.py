# Generated by Django 4.0 on 2024-06-06 21:11

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('advertisers', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='businesscrypto',
            name='name',
            field=models.CharField(default='', max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='businesscrypto',
            name='symbol',
            field=models.CharField(default=datetime.datetime(2024, 6, 6, 21, 11, 6, 225420, tzinfo=utc), max_length=10),
            preserve_default=False,
        ),
    ]
