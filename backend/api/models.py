from django.db import models
from django.contrib.auth.models import User

class ServiceRequest(models.Model):
    STATUS_CHOICES = [('open','Open'), ('in_progress','In Progress'), ('closed','Closed')]
    customer = models.ForeignKey(User, on_delete=models.CASCADE, related_name='service_requests')
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='open')

    def __str__(self):
        return f"{self.title} ({self.customer.username})"

class Bill(models.Model):
    customer = models.ForeignKey(User, on_delete=models.CASCADE, related_name='bills')
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    due_date = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)
    paid = models.BooleanField(default=False)

    def __str__(self):
        return f"Bill #{self.id} - {self.customer.username} - {self.amount}"
