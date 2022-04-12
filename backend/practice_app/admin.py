
from django.contrib import admin
from .models import Course,Student,ClassGrades

admin.site.register(Student)
admin.site.register(Course)
admin.site.register(ClassGrades)

# Register your models here.
