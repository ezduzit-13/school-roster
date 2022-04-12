from rest_framework import serializers
from .models import Student,Course,ClassGrades

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'


class ClassGradesSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClassGrades
        fields = '__all__'


        