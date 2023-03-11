from django.db import models

class User(models.Model):
    email = models.EmailField(unique=True)
    name = models.CharField(max_length=255)
    password = models.CharField(max_length=255)

    def __str__(self):
        return "self.name"

# class Result(models.Model):
#     wasteType = models.CharField(max_length=50)
#     accuracy = models.FloatField()

#     def __str__(self):
#         return f"{self.wasteType} ({self.accuracy})"

class Waste(models.Model):
    waste_type = models.CharField(max_length=100)
    accuracy = models.FloatField()

    def __str__(self):
        return f"{self.waste_type} ({self.accuracy}%)"
