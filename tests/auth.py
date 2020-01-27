import requests
import json

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
