from django.shortcuts import render
# test mail
from django.core.mail import send_mail
from django.conf import settings


def home(request):
    subject = 'Thank you for registering to our site'
    message = ' it  means a world to us '
    email_from = settings.EMAIL_HOST_USER
    recipient_list = ['ahmedsoftwaredevelopment@gmail.com', ]
    send_mail(subject, message, email_from, recipient_list)
    return render(request, "home.html")
