from django.http import HttpResponse, JsonResponse
from .models import *
from django.contrib.auth import authenticate, login, logout
from rest_framework.decorators import api_view
from django.core import serializers

# Create your views here.
def send_the_homepage(request):
    theIndex = open('static/index.html').read()
    return HttpResponse(theIndex)

def send_the_homepage(request):
    theIndex = open('static/index.html').read()
    return HttpResponse(theIndex)

#This will create a signup route NOTE: this doesnt render anything instead it's specifically 
# dedicated to altering the datbase by creating new users that can sign in or out
@api_view(['POST'])
def sign_up(request):
    try:
        AppUser.objects.create_user(name=request.data['name'], last_name= request.data['lastName'], job_title=request.data['jobTitle'], username=request.data['email'], password=request.data['password'], email=request.data['email'])
    except Exception as e:
        print(str(e))
    return HttpResponse('Youve signed up')

@api_view(['POST'])
def log_in(request):
    email = request.data['email']
    password=request.data['password']
    user = authenticate(username= email, password = password)
    if user is not None:
        if user.is_active:
            try:
                login(request._request, user)
            except Exception as e:
                print(str(e))
            return HttpResponse('Youre logged in')
        else: 
            return HttpResponse('Not Active')
    else:
        return HttpResponse('No user recognized')
    
@api_view(['POST'])
def log_out(request):
    print('here')
    logout(request)
    return HttpResponse('Logged Out')

@api_view(['GET'])                
def curr_user(request):
    if request.user.is_authenticated:
        data= serializers.serialize("json", [request.user], fields=['name', 'email', 'password'])
        return HttpResponse(data)
    else:
        return JsonResponse({'user':None})