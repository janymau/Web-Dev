from django.urls import path
from .views import *
urlpatterns = [
    path('/companies/', CompaniesList, name='companies-list'),
    path('/companies/<int:id>/', CompanyDetail, name='company-detail'),
    path('/companies/<int:id>/vacancies/', CompanyVacancies, name='company-vacancies'),
    path('/vacancies/', VacancyList, name='vacancies-list'),
    path('/vacancies/<int:id>/', VacancyDetail, name='vacancy-detail'),
    path('/vacancies/top_ten/', TopTenVacancies, name='top-10-vacancies')

]
