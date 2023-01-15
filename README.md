# crud-api
"CRUD" service build on pure Node js

---

## Build and Run

### Install dependencies

```bash
npm i
```

### Start app

```bash
npm run start
```

---

### Endpoints

|HTTP Method|URL|Description|
|---|---|---|
|`GET`|<http://localhost:4000/api/users/> | Get all Users |
|`GET`|<http://localhost:4000/api/users/{userId}> | Get User by ID |
|`POST`|<http://localhost:4000/api/users/> | Create new User |
|`PUT`|<http://localhost:4000/api/users/{userId}> | Update User by ID |

---

### User

Users are stored as `objects` that have following properties:

- `id` — unique identifier (`string`, `uuid`) generated on server side
- `username` — user's name (`string`, **required**)
- `age` — user's age (`number`, **required**)
- `hobbies` — user's hobbies (`array` of `strings` or empty `array`, **required**)
