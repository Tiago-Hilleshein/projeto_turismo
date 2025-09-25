from django.shortcuts import render

def index(request):
    return render(request, "index.html")

def atracoes(request):
    return render(request, "atracoes.html")

def historia(request):
    return render(request, "historia.html")

def cultura(request):
    return render(request, "cultura.html")
