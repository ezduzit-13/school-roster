from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ClassGradesSerializer, StudentSerializer,CourseSerializer
from practice_app.models import ClassGrades, Student, Course
from . import serializers

class StudentViewSet(ModelViewSet):
    serializer_class = StudentSerializer
    queryset = Student.objects.all()


class CourseViewSet(ModelViewSet):
    serializer_class = CourseSerializer
    queryset = Course.objects.all()

class EnrollmentViewSet(ModelViewSet):
    serializer_class = ClassGradesSerializer
    queryset = ClassGrades.objects.all()

@api_view(['GET'])
def view_student_grades(request,student_id):
    student_grades = ClassGrades.objects.filter(student_profile = student_id)
    serializer = ClassGradesSerializer(student_grades,many = True)
    
    return Response(serializer.data)
