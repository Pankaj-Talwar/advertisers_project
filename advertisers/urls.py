# advertisers/urls.py

from django.urls import path
from .views import AdvertiserList, LocationList, AdSpendList, BusinessCryptoList

urlpatterns = [
    path('advertisers/', AdvertiserList.as_view(), name='advertiser-list'),
    path('locations/', LocationList.as_view(), name='location-list'),
    path('adspend/', AdSpendList.as_view(), name='adspend-list'),
    path('businesscrypto/', BusinessCryptoList.as_view(), name='businesscrypto-list'),
]
