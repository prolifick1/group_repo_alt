from django.http import HttpResponse, JsonResponse
from .models import *
from django.contrib.auth import authenticate, login, logout
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.core import serializers


# Create your views here.


def send_the_homepage(request):
    theIndex = open('static/index.html').read()
    return HttpResponse(theIndex)


def send_the_homepage(request):
    theIndex = open('static/index.html').read()
    return HttpResponse(theIndex)

# This will create a signup route NOTE: this doesnt render anything instead it's specifically
# dedicated to altering the datbase by creating new users that can sign in or out


@api_view(['POST'])
def sign_up(request):
    try:
        AppUser.objects.create_user(
            first_name=request.data['firstName'],
            last_name=request.data['lastName'],
            job_title=request.data['jobTitle'],
            username=request.data['email'],
            password=request.data['password'],
            email=request.data['email'])
        return Response({"message": "success"})
    except:
        return Response({"message": "Failed to sign up user"})


@api_view(['POST'])
def log_in(request):
    email = request.data['email']
    password = request.data['password']
    user = authenticate(username=email, password=password)
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
        data = serializers.serialize("json", [request.user], fields=[
                                     'first_name', 'email', 'password'])
        return HttpResponse(data)
    else:
        return JsonResponse({'user': None})


@api_view(['GET'])
def profile_page(request):
    current_user = AppUser.objects.filter(id=request.user.id).values()
    return Response(current_user[0])


@api_view(['GET', 'POST'])
def jobs_applied_for(request):
    if request.method == "GET":
        current = AppliedJobs.objects.filter(user=request.user.id).values()
        return Response(list(current))
    if request.method == 'POST':
        try:
            user = request.user
            company_link = request.data['link']
            job_description = request.data['description']
            company_name = request.data['company_name']
            job_title = request.data['job_title']
            new_job = AppliedJobs.objects.create(
                user=user, company_link=company_link, description=job_description, company_name=company_name, job_title=job_title)
            new_job.save()
            if request.data['deadline']:
                deadline = request.data['deadline']
                new_job(deadline=deadline)
                new_job.save()
            if request.data['date_completed']:
                date_comp = request.data['date_completed']
                new_job(date_completed=date_comp)
                new_job.save()
            if request.data['completed']:
                completed = request.data['completed']
                new_job(completed=completed)
                new_job.save()
            return Response({"message": "success"})
        except:
            return Response({"message": "failed to post new job application"})


@api_view(["GET", "POST"])
def interviews(request):
    if request.method == "GET":
        current = Interview.objects.filter(user=request.user.id).values()
        return Response(list(current))
    if request.method == "POST":
        try:
            user = request.user
            company_name = request.data['company_name']
            interview = Interview.objects.create(
                user=user, company_name=company_name)
            interview.save()
            if request.data['interview_date']:
                interview_date = request.data["interview_date"]
                interview(interview_date=interview_date)
                interview.save()
            if request.data['completed']:
                completed = request.data['completed']
                interview(completed=completed)
                interview.save()
            return Response({"message": "new post of job interview"})
        except:
            return Response({"message": "interview creation failed"})


@api_view(["GET", "POST"])
def forums(request):
    if request.method == "GET":
        current = Forum.objects.all()
        return Response(list(current))
    if request.method == "POST":
        try:
            title = request.data['title']
            user = request.user
            company_name = request.data['company_name']
            job_title = request.data['job_title']
            description = request.data['description']
            forum = Forum.objects.create(
                title=title, user=user, company_name=company_name, job_title=job_title, description=description)
            forum.save()
            return Response({"message": "new post of job forum"})
        except:
            return Response({"message": "forum creation failed"})


@api_view(['GET'])
def check_authentication(request):
    # check if user is authenticated
    if request.user.is_authenticated:
        return Response({'message': 'yes'})
    else:
        return Response({'message': 'no'})
