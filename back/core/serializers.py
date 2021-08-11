from rest_framework import serializers
from .models import Member

class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = ['id', 'name', 'surname', 'email', 'phone', 'address', 'photo']


class MemberSimpleSeralizer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = ['id', 'name', 'surname']