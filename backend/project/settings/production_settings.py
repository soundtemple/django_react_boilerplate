from .base_settings import *

# add secret info using KEY = config(KEY)
DEBUG = config('DEBUG', cast=bool)
ALLOWED_HOSTS = ['ip-address', 'www.your-website.com']

SECRET_KEY = os.getenv('SECRET_KEY')
SESSION_COOKIE_SECURE = True
SECURE_BROWSER_XSS_FILTER = True
SECURE_CONTENT_TYPE_NOSNIFF = True
SECURE_HSTS_INCLUDE_SUBDOMAINS = True
SECURE_HSTS_SECONDS = 31536000
SECURE_REDIRECT_EXEMPT = []
SECURE_SSL_REDIRECT = True
SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')


# CONFIGURE THIS....
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql_psycopg2",
        "NAME": config(DB_NAME),
        "USER": config(DB_USER),
        "PASSWORD": config(DB_PASSWORD),
        "HOST": config(DB_HOST),
        "PORT": ''
    }
}
