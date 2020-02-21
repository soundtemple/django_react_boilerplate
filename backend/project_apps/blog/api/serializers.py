from rest_framework import serializers

from project_apps.blog.models import Article


class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ('title', 'subtitle', 'body', 'published', 'author', 'tags', 'featured')
