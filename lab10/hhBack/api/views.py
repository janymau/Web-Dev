from .models import *
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .serializers import *


class CompanyViewSet(viewsets.ModelViewSet):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

    @action(detail=True, methods=['get'])
    def vacancies(self, request, pk=None):
        company = self.get_object()
        vacancies = Vacancy.objects.filter(company = company)
        serializer = VacancySerializer(vacancies, many = True)
        return Response(serializer.data)

class VacancyViewSet(viewsets.ModelViewSet):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

    @action(detail=False, methods=['get'])
    def top_ten(self, request):
        vacancies = Vacancy.objects.all().order_by('-salary')[:10]
        serializer = self.get_serializer(vacancies, many=True)
        return Response(serializer.data)



