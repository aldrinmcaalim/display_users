from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import User
from .serializers import *
# Create your views here.

@api_view(['GET'])
def users_list(request):
    if request.method == 'GET':
        data = User.objects.all()

        serializer = UserSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)
