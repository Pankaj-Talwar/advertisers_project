# Generated by Django 4.0 on 2024-06-06 14:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Advertiser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=254)),
            ],
        ),
        migrations.CreateModel(
            name='Location',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('latitude', models.FloatField()),
                ('longitude', models.FloatField()),
                ('address', models.CharField(max_length=255)),
                ('advertiser', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='advertisers.advertiser')),
            ],
        ),
        migrations.CreateModel(
            name='BusinessCrypto',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('amount', models.DecimalField(decimal_places=2, max_digits=10)),
                ('date', models.DateField()),
                ('advertiser', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='advertisers.advertiser')),
            ],
        ),
        migrations.CreateModel(
            name='AdSpend',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('amount', models.DecimalField(decimal_places=2, max_digits=10)),
                ('date', models.DateField()),
                ('advertiser', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='advertisers.advertiser')),
            ],
        ),
    ]
