from rest_framework import generics

from .models import Task
from .filters import TaskFilter
from .serializers import TaskSerializer
from rest_framework import filters


class TaskList(generics.ListCreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filter_class = TaskFilter


class TaskDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer