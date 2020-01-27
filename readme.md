# Django VueJs Boilerplate

Kickstart project for rapid and secure prototyping with Django and VueJs.

### TODO

- JWT cookie auth
- Unit tests setup
- Dockerization
- AWS multicontainer setup

### Test commands

curl \
 -X POST \
 -H "Content-Type: application/json" \
 -d '{"username": "admin", "password": "adminadmin"}' \
 http://localhost:8000/api/token/

curl \
 -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTgwMDk5NDUzLCJqdGkiOiJjODA0NmQ2NTkyMDc0MDM1OWY3MTY2NTA3OTI4M2M3YiIsInVzZXJfaWQiOjF9.W5oNg73WVOY8OKEv5KxYNnL5Gl8bRnHF59zkHb7IyfY" \
 http://127.0.0.1:8000/auth/
