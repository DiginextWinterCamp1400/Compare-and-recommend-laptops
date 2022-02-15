# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Laptop(models.Model):
    id = models.IntegerField(primary_key=True)
    company = models.TextField(db_column='Company', blank=True, null=True)  # Field name made lowercase.
    product = models.TextField(db_column='Product', blank=True, null=True)  # Field name made lowercase.
    typename = models.TextField(db_column='TypeName', blank=True, null=True)  # Field name made lowercase.
    inches = models.FloatField(db_column='Inches', blank=True, null=True)  # Field name made lowercase.
    screenresolution = models.TextField(db_column='ScreenResolution', blank=True, null=True)  # Field name made lowercase.
    cpu = models.TextField(db_column='Cpu', blank=True, null=True)  # Field name made lowercase.
    ram = models.TextField(db_column='Ram', blank=True, null=True)  # Field name made lowercase.
    memory = models.TextField(db_column='Memory', blank=True, null=True)  # Field name made lowercase.
    gpu = models.TextField(db_column='Gpu', blank=True, null=True)  # Field name made lowercase.
    opsys = models.TextField(db_column='OpSys', blank=True, null=True)  # Field name made lowercase.
    weight = models.TextField(db_column='Weight', blank=True, null=True)  # Field name made lowercase.
    price_euros = models.FloatField(db_column='Price_euros', blank=True, null=True)  # Field name made lowercase.
    numberofsearch = models.IntegerField(db_column='NumberOfSearch', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'laptop'
