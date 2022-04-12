from django.contrib import admin
from django.urls import path,include
from . import views
from rest_framework.routers import DefaultRouter



router = DefaultRouter()
router.register(r'student', views.StudentViewSet, basename='student')
router.register(r'course',views.CourseViewSet, basename = 'course')
router.register(r'enrollment',views.EnrollmentViewSet, basename = 'enrollment')


urlpatterns = [
    path('',include(router.urls)),
    path('classgrades/<int:student_id>/',views.view_student_grades),
    ]



