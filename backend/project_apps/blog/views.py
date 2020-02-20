from django.shortcuts import render

# Create your views here.
from django.views.generic import ListView

from project_apps.blog.models import Article


class BlogHomeView(ListView):

    model = Article
    template_name = 'blog/blog_base.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['blog_welcome'] = "Welcome to the Soundtemple blog"
        return context
