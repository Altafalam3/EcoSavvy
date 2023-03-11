from rest_framework import serializers
from .models import User,Result

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email', 'name', 'password']

# class ResultSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Result
#         fields = '__all__'

class ResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = Result
        fields = ['id', 'wasteType', 'accuracy']
