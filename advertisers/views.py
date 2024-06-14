# advertisers/views.py

from rest_framework import generics
from .models import Advertiser, Location, AdSpend, BusinessCrypto
from .serializers import AdvertiserSerializer, LocationSerializer, AdSpendSerializer, BusinessCryptoSerializer

class AdvertiserList(generics.ListCreateAPIView):
    queryset = Advertiser.objects.all()
    serializer_class = AdvertiserSerializer

class LocationList(generics.ListCreateAPIView):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer

class AdSpendList(generics.ListCreateAPIView):
    queryset = AdSpend.objects.all()
    serializer_class = AdSpendSerializer

class BusinessCryptoList(generics.ListCreateAPIView):
    queryset = BusinessCrypto.objects.all()
    serializer_class = BusinessCryptoSerializer
