# advertisers/serializers.py

from rest_framework import serializers
from .models import Advertiser, Location, AdSpend, BusinessCrypto

class AdvertiserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Advertiser
        fields = ['id', 'name', 'email']

class LocationSerializer(serializers.ModelSerializer):
    advertiser_name = serializers.CharField(source='advertiser.name', read_only=True)
    advertiser_id = serializers.PrimaryKeyRelatedField(queryset=Advertiser.objects.all(), write_only=True)

    class Meta:
        model = Location
        fields = ['advertiser_name', 'advertiser_id', 'latitude', 'longitude', 'address']

    def create(self, validated_data):
        advertiser = validated_data.pop('advertiser_id')
        location = Location.objects.create(advertiser=advertiser, **validated_data)
        return location##'__all__' ##['id', 'latitude', 'longitude', 'address']

class AdSpendSerializer(serializers.ModelSerializer):
    advertiser_name = serializers.CharField(source='advertiser.name', read_only=True)
    advertiser_id = serializers.PrimaryKeyRelatedField(queryset=Advertiser.objects.all(), write_only=True)

    class Meta:
        model = AdSpend
        fields = ['id', 'advertiser_name', 'advertiser_id', 'amount', 'date']

    def create(self, validated_data):
        advertiser = validated_data.pop('advertiser_id')
        ad_spend = AdSpend.objects.create(advertiser=advertiser, **validated_data)
        return ad_spend

class BusinessCryptoSerializer(serializers.ModelSerializer):
    advertiser_name = serializers.CharField(source='advertiser.name', read_only=True)
    advertiser_id = serializers.PrimaryKeyRelatedField(queryset=Advertiser.objects.all(), write_only=True)
    name = serializers.CharField(max_length=100)
    symbol = serializers.CharField(max_length=10)
    amount = serializers.DecimalField(max_digits=10, decimal_places=2)
    date = serializers.DateField()

    class Meta:
        model = BusinessCrypto
        fields = ['id', 'advertiser_name', 'advertiser_id', 'name', 'symbol', 'amount', 'date']

    def create(self, validated_data):
        advertiser = validated_data.pop('advertiser_id')
        business_crypto = BusinessCrypto.objects.create(advertiser=advertiser, **validated_data)
        return business_crypto
