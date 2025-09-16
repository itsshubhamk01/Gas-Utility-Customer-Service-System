from django.contrib import admin
from .models import ServiceRequest, Bill
admin.site.register(ServiceRequest)
admin.site.register(Bill)
