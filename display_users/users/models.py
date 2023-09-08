from django.db import models
import uuid

# Create your models here.
class User(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=10)
    address = models.CharField(max_length=250)

    def __str__(self):
        return f"id: {self.pk} | {self.email} | {self.address}"
    
