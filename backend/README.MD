## API Reference

#### User register

```http
  POST /auth/register
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**|
| `email` | `string` | **Required**|
| `password` | `string` | **Required**|

## Response

```json
{
    "user": {
        "username": "User",
        "email": "simple@mail.com",
        "role": "user",
        "created_at": "2024-08-11 07:47:51",
        "updated_at": "2024-08-11 07:47:51"
    }
}
```

#### User login

```http
  POST /auth/login
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**|
| `password` | `string` | **Required**|

## Response

```json
{
    "user": {
        "username": "encry",
        "email": "dsafmsdf@gmail.com",
        "role": "user",
        "created_at": "2024-08-11 06:56:37",
        "updated_at": "2024-08-11 06:56:37"
    }
}
```

#### User info

```http
  GET /user
```

| Header | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Bearer token` | `string` | **Required**|

## Response

```json
{
    "user": {
        "username": "encry",
        "email": "dsafaamsdf@gmail.com"
    }
}
```


## Run Locally


Go to the project directory

```bash
  cd backend
```

Install dependencies

```bash
  composer global require leafs/cli
```

```bash
  php leaf db:install
```

```bash
  php leaf db:migrate
```

Start the server

```bash
  leaf serve
```

