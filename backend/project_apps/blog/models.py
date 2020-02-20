from django.db import models


class Article(models.Model):
    title = models.CharField(max_length=120)
    content = models.TextField()

    class Meta:
        app_label = 'blog'

    def __str__(self):
        return self.title
