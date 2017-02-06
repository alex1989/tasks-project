from rest_framework import filters
from .models import Task
import django_filters

class TaskFilter(filters.FilterSet):
    
    class Meta:
        model = Task
        fields = ['complete']