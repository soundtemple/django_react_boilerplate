from django.urls import path

from project_apps.blog.api.views import ArticleListView, ArticleDetailView
from project_apps.blog.views import BlogHomeView

urlpatterns = [
    path('home', BlogHomeView.as_view()),
    path('', ArticleListView.as_view()),
    path('<pk>', ArticleDetailView.as_view()),
]
