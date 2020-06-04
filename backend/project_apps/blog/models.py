from django.db import models
from tinymce.models import HTMLField


class Tag(models.Model):
    title = models.CharField(max_length=128)

    def __str__(self):
        return 'Tag: %s' % self.title


class Article(models.Model):
    title = models.CharField(max_length=120, unique=True)
    subtitle = models.CharField(max_length=255, null=True, blank=True)
    body = HTMLField()
    published = models.DateTimeField(auto_now=True)
    author = models.ForeignKey('auth_user.User', on_delete=models.CASCADE, related_name='articles',)
    tags = models.ManyToManyField(Tag, verbose_name='Tags')
    featured = models.BooleanField(default=False)

    class Meta:
        app_label = 'blog'

    def __str__(self):
        return 'Article: %s' % self.title
