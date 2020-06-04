from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView

from project_apps.blog.models import Article
from .serializers import ArticleSerializer


class ArticleListView(ListCreateAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer


class ArticleDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
