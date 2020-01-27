import requests
import json

# Without Cookies
print('Testing without cookies\n')

print('Accessing protected view unauthorized')
r = requests.get('http://127.0.0.1:8000/auth/')
print(r.text, '\n')

print('Asking for token authorization')
user = 'admin'
password = 'adminadmin'
payload = {
    'username': user,
    'password': password
}
r = requests.post('http://localhost:8000/api/token/', payload)
access_token = json.loads(r.text)['access']
print('access_token', access_token, '\n')

print('Accessing protected view authorized')
headers = {'Authorization': f'Bearer {access_token}'}
r = requests.get('http://127.0.0.1:8000/auth/', headers=headers)
print(r.text, '\n')


# With Cookies
print('Testing with cookies\n')

print('Reading Cookie')
session = requests.Session()
print(session.cookies.get_dict(), '\n')

print('Asking for token authorization', '\n')
user = 'admin'
password = 'adminadmin'
payload = {
    'username': user,
    'password': password
}
r = session.post('http://localhost:8000/api/token/', payload)

print('Reading received cookie')
cookies = session.cookies.get_dict()
print(cookies, '\n')

print('Accessing protected view authorized without cookie')
r = session.get('http://127.0.0.1:8000/auth/')
print(r.text, '\n')

print('Accessing protected view authorized with cookie')
r = session.get('http://127.0.0.1:8000/auth/', cookies=cookies)
print(r.text, '\n')
