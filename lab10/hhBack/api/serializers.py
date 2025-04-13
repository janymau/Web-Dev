from rest_framework import serializers
from .models import *

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = '__all__'

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ['id', 'name']

class VacancySerializer(serializers.ModelSerializer):
    company = CompanySerializer()
    class Meta:
        model = Vacancy
        fields = ['id', 'name', 'desc', 'salary', 'company']