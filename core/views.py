from django.shortcuts import render

def home(request):
    return render(request, "templates/index.html")
    return render(request, "templates/historia.html")
    return render(request, "templates/cultura.html")
    return render(request, "templates/atracoes.html")