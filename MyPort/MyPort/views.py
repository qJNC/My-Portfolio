from django.shortcuts import render

def myhome(request):
    return render(request,"index.html")

def pdf(request):
    return render(request,"pdf.html")
