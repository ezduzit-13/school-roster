# Generated by Django 4.0.3 on 2022-04-06 19:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ClassGrades',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('grade', models.CharField(choices=[('A', 'A'), ('B', 'B'), ('C', 'C'), ('D', 'D'), ('F', 'F')], max_length=2)),
            ],
        ),
        migrations.CreateModel(
            name='Student',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Course',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('course_name', models.CharField(max_length=255)),
                ('join_student', models.ManyToManyField(through='practice_app.ClassGrades', to='practice_app.student')),
            ],
        ),
        migrations.AddField(
            model_name='classgrades',
            name='course_profile',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='practice_app.course'),
        ),
        migrations.AddField(
            model_name='classgrades',
            name='student_profile',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='practice_app.student'),
        ),
    ]
