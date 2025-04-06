from rest_framework import serializers
from .models import Company, Vacancy


class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = '__all__'


class VacancySerializer(serializers.ModelSerializer):
    class Meta:
        model = Vacancy
        fields = '__all__'


