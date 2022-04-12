
from django.db import models

class Student(models.Model):
    name = models.CharField(max_length=255)
    def __str__(self):
        return self.name

class Course(models.Model):
    course_name = models.CharField(max_length=255)
    join_student = models.ManyToManyField(Student,through='ClassGrades',through_fields=('course_profile','student_profile'))

    def __str__(self):
        return self.course_name

class ClassGrades(models.Model):
    grade_choices = [
        ('A','A'),
        ('B','B'),
        ('C','C'),
        ('D','D'),
        ('F','F'),
    ]
    course_profile = models.ForeignKey(Course,on_delete=models.CASCADE)
    student_profile = models.ForeignKey(Student,on_delete=models.CASCADE)
    grade = models.CharField(max_length=2,choices=grade_choices)
    class Meta:
        unique_together = ('course_profile', 'student_profile',)

    def __str__(self):
        return f'{self.student_profile} is taking {self.course_profile} and has a {self.grade}'