from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from api.views import CustomerViewSet, ServiceRequestViewSet, BillViewSet
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

router = routers.DefaultRouter()
router.register(r'customers', CustomerViewSet, basename='customer')
router.register(r'service-requests', ServiceRequestViewSet, basename='service-request')
router.register(r'bills', BillViewSet, basename='bill')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/', include(router.urls)),
]
