from django.db import models

class User(models.Model):
    email = models.EmailField(unique=True)
    name = models.CharField(max_length=255)
    password = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Prediction(models.Model):
    text = models.CharField(max_length=200)
    prediction = models.CharField(max_length=30)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text
