from .models import Laptop
from rest_framework import serializers

class LaptopSerializer(serializers.ModelSerializer):
    class Meta:
        model = Laptop
        fields = [
                    'id',
                    'company',
                    'product',
                    'typename',
                    'inches',
                    'screenresolution',
                    'cpu',
                    'ram',
                    'memory',
                    'gpu',
                    'opsys',
                    'weight',
                    'price_euros',
                    'numberofsearch',
        ]