from rest_framework import serializers
from django.contrib.auth.models import User
from .models import ServiceRequest, Bill

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username','email']

class ServiceRequestSerializer(serializers.ModelSerializer):
    customer = UserSerializer(read_only=True)
    class Meta:
        model = ServiceRequest
        fields = '__all__'
        read_only_fields = ['customer','created_at']

class BillSerializer(serializers.ModelSerializer):
    customer = UserSerializer(read_only=True)
    class Meta:
        model = Bill
        fields = '__all__'
        read_only_fields = ['customer','created_at']
