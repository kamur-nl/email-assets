```bash
curl -X POST http://localhost:3587/ \
  -H "Content-Type: application/json" \
  -d '{"templateName":"Verify","props":{"token":"1234", "email": "weijers.pepijn@proton.me"}, "lang": "en", "token": "123", "plainText": true}'
```