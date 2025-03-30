from django.shortcuts import render
from .models import Category, Product
from django.http import JsonResponse

# Create your views here.
def ProductsList(request):
    products = Product.objects.all()
    data = []
    for product in products:
        data.append({
            'id': product.id,
            'name': product.name,
            'price': product.price,
            'description': product.description,
            'count': product.count,
            'is_active': product.is_active,
            'category': product.category.id
        })
        
    return JsonResponse(data, safe=False)

def ProductsDetails(request, id):
    product = Product.objects.get(id=id)
    data = {
        'id': product.id,
        'name': product.name,
        'price': product.price,
        'description': product.description,
        'count': product.count,
        'is_active': product.is_active,
        'category': product.category.id
    }
    
    return JsonResponse(data)

def CategoriesList(request):
    categories = Category.objects.all()
    data = []
    for category in categories:
        data.append({
            'id': category.id,
            'name': category.name
        })
        
    return JsonResponse(data, safe=False)

def CategoryDetails(request, id):
    category = Category.objects.get(id=id)
    data = {
        'id': category.id,
        'name': category.name
    }
    
    return JsonResponse(data)

def CategoryProductsList(request,id):
    category = Category.objects.get(id=id)
    products = Product.objects.filter(category=category)
    data = []
    
    for product in products:
        data.append({
            'id': product.id,
            'name': product.name,
            'price': product.price,
            'description': product.description,
            'count': product.count,
            'is_active': product.is_active
        })
        
    return JsonResponse(data, safe=False)
    