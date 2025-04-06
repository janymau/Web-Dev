import json
from urllib import request
from django.http import JsonResponse
from .models import Company, Vacancy
from django.views.decorators.csrf import csrf_exempt
# Create your views here.
@csrf_exempt
def CompaniesList(request):
    if request.method == 'GET':
        Companies = Company.objects.all()
        data = []
        for company in Companies:
            data.append({
                'id':company.id,
                'name':company.name,
                'desc':company.desc,
                'city':company.city,
                'address':company.address
            })
        return JsonResponse(data, safe=False)
    elif request.method == 'POST':
        try:
            data = json.loads(request.body)
            required_fields = ['name', 'desc', 'city', 'address']
            for field in required_fields:
                if field not in data:
                    return JsonResponse({'error': f"Missing field {field}"}, status = 400)

            company = Company.objects.create(
                name = data['name'],
                desc = data['desc'],
                city = data['city'],
                address = data['address']
            )

            return JsonResponse({
                'id':company.id,
                'name':company.name,
                'desc':company.desc,
                'city':company.city,
                'address':company.address
            }, status=201)
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON format'}, status=400)
    elif request.method == 'PUT':
        try:
            data = json.loads(request.body)
            required_fields = ['name', 'desc', 'city', 'address']
            for field in required_fields:
                if field not in data:
                    return JsonResponse({'error': f"Missing field {field}"}, status = 400)

            try:
                company = Company.objects.get(id=data['id'])
            except Company.DoesNotExist:
                return JsonResponse({'error': 'Company not found'}, status=404)
            

            company.name = data['name']
            company.desc = data['desc']
            company.city = data['city']
            company.address = data['address']
            company.save()


            return JsonResponse({
                'id': company.id,
                'name':company.name,
                'desc':company.desc,
                'salary':company.city,
                'company':company.address
            }, status=201)
    
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON format'}, status=400)

    return JsonResponse({'error': 'Invalid request method'}, status=405)

@csrf_exempt
def VacancyList(request):
    if request.method == 'GET':

        Vacancies = Vacancy.objects.all()
        data = []
        for vacancy in Vacancies:
            data.append({
                'id':vacancy.id,
                'name':vacancy.name,
                'desc':vacancy.desc,
                'salary':vacancy.salary,
                'company':vacancy.company.name
            })

        return JsonResponse(data, safe=False)
    elif request.method == 'POST':
        try:
            data = json.loads(request.body)
            required_fields = ['name', 'desc', 'salary', 'company']
            for field in required_fields:
                if field not in data:
                    return JsonResponse({'error': f"Missing field {field}"}, status = 400)

            company = Company.objects.get(name = data['company'])

            vacancy = Vacancy.objects.create(
                name = data['name'],
                desc = data['desc'],
                salary = data['salary'],
                company = company
            )

            return JsonResponse({
                'id':vacancy.id,
                'name':vacancy.name,
                'desc':vacancy.desc,
                'salary':vacancy.salary,
                'company':vacancy.company.name
            }, status = 201)
        
        except Company.DoesNotExist:
            return JsonResponse({'error': 'Company not found'}, status=404)
        
    elif request.method == 'PUT':
        try:
            data = json.loads(request.body)
            required_fields = ['name', 'desc', 'salary', 'company']
            for field in required_fields:
                if field not in data:
                    return JsonResponse({'error': f"Missing field {field}"}, status = 400)

            try:
                company = Company.objects.get(name=data['company'])
            except Company.DoesNotExist:
                return JsonResponse({'error': 'Company not found'}, status=404)
            
            try:
                vacancy = Vacancy.objects.get(id = data['id'])
            except Vacancy.DoesNotExist:
                return JsonResponse({'error': 'Vacancy not found'}, status=404)

            vacancy.name = data['name']
            vacancy.desc = data['desc']
            vacancy.salary = data['salary']
            vacancy.company = company

            vacancy.save()


            return JsonResponse({
                'id': vacancy.id,
                'name':vacancy.name,
                'desc':vacancy.desc,
                'salary':vacancy.salary,
                'company':vacancy.company.name
            }, status=201)
    
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON format'}, status=400)
            
    return JsonResponse({'error':'Invalid request method'}, status=405)


    


def CompanyDetail(request, id):
    company = Company.objects.get(id=id)
    data = {
        'id':company.id,
        'name':company.name,
        'desc':company.desc,
        'city':company.city,
        'address':company.address
    }

    return JsonResponse(data)

def VacancyDetail(request, id):
    vacancy = Vacancy.objects.get(id=id)
    data = {
        'id':vacancy.id,
        'name':vacancy.name,
        'desc':vacancy.desc,
        'salary':vacancy.salary,
        'company':vacancy.company.name
    }

    return JsonResponse(data)

def CompanyVacancies(request, id):
    company = Company.objects.get(id=id)
    vacancies = Vacancy.objects.filter(company=company)
    data = []

    for vacancy in vacancies:
        data.append({
        'id':vacancy.id,
        'name':vacancy.name,
        'desc':vacancy.desc,
        'salary':vacancy.salary,
        'company':vacancy.company.name
            
    })
        
    return JsonResponse(data, safe=False)

def TopTenVacancies(request):
    Vacancies = Vacancy.objects.all()
    data = []
    for vacancy in Vacancies:
        data.append({
            'id':vacancy.id,
            'name':vacancy.name,
            'desc':vacancy.desc,
            'salary':vacancy.salary,
            'company':vacancy.company.name
        })
    
    data.sort(key=lambda x: x['salary'], reverse=True)

    data10 = data[:10]

    return JsonResponse(data10, safe=False)


        