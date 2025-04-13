from django.db import models

# Create your models here.

class Company(models.Model):
    name = models.CharField(max_length=50)
    desc = models.TextField()
    city = models.CharField(max_length=20)
    address = models.TextField()


    def __str__(self):
        return f"{self.name} co."
    
class Vacancy(models.Model):
    name = models.CharField(max_length=100)
    desc = models.TextField()
    salary = models.FloatField()
    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name="company_of_vacancy")


    def __str__(self):
        return f"Vacancy: {self.name}"
    


