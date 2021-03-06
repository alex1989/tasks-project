from django.db import models

class Task(models.Model):
    name = models.CharField(max_length=250)
    complete = models.BooleanField(default=False)

    def __str__(self):
        return self.name
