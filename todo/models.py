from django.db import models
from django.db.models import CharField, BooleanField

# Create your models here.
class Todo(models.Model):
    title = CharField(max_length = 150)
    description = CharField(max_length = 150)
    completed = BooleanField(default=False)
    
    def __str__(self):
        return super().title