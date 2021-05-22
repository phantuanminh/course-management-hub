# Course Management Hub

## Note

- For now, visit the development markdown: **[DEVELOPMENT.md](./DEVELOPMENT.md)**
- Coding Style: [Airbn React Style Guide](https://airbnb.io/javascript/react/) and [Google Python Style Guide](https://google.github.io/styleguide/pyguide.html).
- To use Dockerized API & MongoDB, you need to create an API user in MongoDB:

```bash
docker exec -it mongo bash
mongo -u admin -p
```

```sql
> use webapp
> db.createUser({user: 'apiuser', pwd: 'apipassword', roles: [{role: 'readWrite', db: 'webapp'}]})
```
