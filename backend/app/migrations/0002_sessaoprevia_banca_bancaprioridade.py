# Generated by Django 5.0.3 on 2024-03-23 21:06

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='SessaoPrevia',
            fields=[
                ('sessao_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='app.sessao')),
            ],
            options={
                'abstract': False,
            },
            bases=('app.sessao',),
        ),
        migrations.CreateModel(
            name='Banca',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('professores', models.ManyToManyField(to='app.professor')),
                ('sessao', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='app.sessao')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='BancaPrioridade',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('banca', models.ManyToManyField(to='app.banca')),
                ('professor', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='app.professor')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
