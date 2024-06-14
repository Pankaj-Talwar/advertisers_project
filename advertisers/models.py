# advertisers/models.py

from django.db import models

class Advertiser(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()

class Location(models.Model):
    advertiser = models.ForeignKey(Advertiser, on_delete=models.CASCADE)
    latitude = models.FloatField()
    longitude = models.FloatField()
    address = models.CharField(max_length=255)

class AdSpend(models.Model):
    advertiser = models.ForeignKey(Advertiser, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    date = models.DateField()

class BusinessCrypto(models.Model):
    advertiser = models.ForeignKey(Advertiser, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    symbol = models.CharField(max_length=10)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    date = models.DateField()

