# Directus

## Dockerfile
This is a copy of the configuration on dev

## Prerequisite
- Docker
- lando or ddev proxying is not started (`lando poweroff`)
- no use on 80/443

## Technologies
- docker and docker-compose
- npm
- postgresql
- redis
- directus
- typesense
- traefik
- directus-extensions

## Files in this directory

- .env.local - environment variables, should be created from .env.local.sample
- CHANGELOG.md - list of directus related changes
- db - database script functions
- docker-compose.yml - declaration of services (proxy, postgres, redis, directus), networks and volumes
- Dockerfile - docker recipe for directus image, base on official directus/directus image with a custom selection of extensions
- package.json - list of scripts to manage directus
- README.md - this file

## Volumes
- /var/lib/postgresql/data is used for saving postgresql database file
- /directus/uploads contains files uploaded
- /direcuts/extensions contains custom extensions (not loaded with npm)

## Starting
For the first start of directus, you should:
- create .env.local
- generate random password and keys, and replace all `<TOBEREPLACED>`
- create an external network called "proxy"
- start postgresql, before the other services
- start all services

After creation, only `npm run up` command should be necessary.

```bash
# env
cp .env.local.sample .env.local

# edit .env.local password/key with generated see pwgen + openssl
# DRAFT_PREVIEW_SECRET
# pwgen 20
# DIRECTUS_ADMIN password need special characters, uppercase, lowercase, numbers
# pwgen 20 -y
# DIRECTUS_KEY, DIRECTUS_SECRET
# openssl rand -hex 24

# create external network for traefik proxying
# docker network create proxy
npm run create-proxy-network

# start postgres
# docker compose -f ./docker-compose.yml --env-file .env.local up -d postgres
npm run up-postgres

# wait for postgres initialization
# docker compose -f ./docker-compose.yml --env-file .env.local up -d
npm run up

# build custom extensions/
npm run update-extensions
npm run reload-directus
```

## Using Directus
You can open directus in your browser at: `https://cms.stack.localhost/` or `http://localhost:8055/`.

If your system don't associate .localhost domain to 127.0.0.1,
you can edit your /etc/hosts file with:

```
127.0.0.1 cms.stack.localhost
```

With https, the certificate is self-signed and you need to accept it in your browser.

Check default email/password from .env.local file.
Use DIRECTUS_ADMIN_EMAIL and DIRECTUS_ADMIN_PASSWORD variables.

This is only valid for the initial startup, without using an external database source.
See "Using an external database" for more information on login.

### Stopping
You can stop all service with `npm run down`.

```bash
# docker compose -f ./docker-compose.yml --env-file .env.local down
npm run down
```

### Using an external database

If you have access to an external database, put the postgresql sql file inside apps/directus and import it.

/!\ Run those instructions only if you have access to an external database .sql script file /!\

```bash
# 1. download a PostgreSQL script file
# ie: wget https://someserver/database/file.sql

# 2. postgres initialization with new database
# docker exec -i stack_local-postgres-1 psql -U postgres -d template1 -c "DROP DATABASE stack WITH (FORCE);"
# docker exec -i stack_local-postgres-1 psql -U postgres -d template1 -c "CREATE DATABASE stack;"
# docker exec -i stack_local-postgres-1 psql -U postgres -d stack < file.sql
./db import file.sql

# 3. restart directus
# docker compose -f ./docker-compose.yml --env-file .env.local down directus
# docker compose -f ./docker-compose.yml --env-file .env.local up -d directus
npm run reload-directus

# 4. create a new user or update password if needed

# a) Reset password of a current user
# docker exec stack_local-directus-1 npx directus users passwd \
#  --email your@email.com --password='yourpassword'
./db list-users --short
./db update-password "someemail@test.com" "n+wPassw0rd"

# b) Create a new user with .env.local admin email/password
# get id from Administrator
# note: if password security doesn't work because of policy
#       you need to use 8 characters, including lowercase, uppercase, number and special characters, see pwgen 20 -y
#       call npm run reload-directus if you update .env.local
# docker exec -i stack_local-postgres-1 psql -U postgres -d stack \
#  -c "SELECT id, name from public.directus_roles"
./db list-roles
docker exec stack_local-directus-1 sh -c 'npx directus users create \
  --email "$ADMIN_EMAIL" --password="$ADMIN_PASSWORD" --role "SOME-ID-FROM-DIRECTUS-ROLES"'

# c) Create a new user with email and password
# docker exec -i stack_local-postgres-1 psql -U postgres -d stack \
#  -c "SELECT id, name from public.directus_roles"
./db list-roles
docker exec stack_local-directus-1 npx directus users create \
  --email your@email.com --password='yourpassword' --role "SOME-ID-FROM-DIRECTUS-ROLES"

# d) if you were using another provider (google), you can change it inside the database to default
./db list-users
docker exec -i stack_local-postgres-1 psql -U postgres -d stack \
  -c "UPDATE public.directus_users SET provider='default' WHERE email = 'your@email.com';"
```

### GraphQL Tokens

You will need to create user and token for GraphQL.

- Website API > Front End. Use the token for next.js NEXT_PUBLIC_API_TOKEN
- Webmasters > Preview User. Use the token for next.js NEXT_API_DRAFT_TOKEN

Go to Users > {Roles} > {User Name} > Admin Options
- Click on "+" to create a key
- Copy/paste the key
- Save the user

Use the Front End token in main project /.env.local file

## Dev Configuration
- For dev, you can check variables in .env.dev.sample
- Replace <TOBEREPLACED> placeholder with passwords, keys and secrets
- Replace frontend/backend/typescript url

# Starting next.js
- Copy file /.env.local.localhost /.env.local
- Update variable NEXT_PUBLIC_API_TOKEN from /.env.local with Website API new token, see GraphQL Tokens section.
- start next.js with `pnpm install` then `pnpm run dev`
- open `http://localhost:4200/` in your browser.
- stop next.js with CTRL-C

## Minimal setup for directus routing

### Required collection items

- `languages`: Create at least one valid item
- `routes`: Create one item like so:
  - `collection_name`: `pages`
  - `translations.route`: `/{{slug}}`
- `pages`: Create an item with required fields. The page settings should get created automatically.

## backup/operations/ directory

`backup/operations` directory is a copy of some run script operation since there is no directus sync config yet

## migration
See https://github.com/directus/directus/releases for versions and releases notes

1. update Dockerfile with new directus value
- Check https://hub.docker.com/layers/directus/directus/latest/  for node version
- Check https://www.npmjs.com/package/corepack?activeTab=versions for corepack version
- Check https://www.npmjs.com/package/pnpm?activeTab=versions for pnpm version

2. run commands
```bash
npm run up
./db export
npm run rebuild-directus
npm run up

# checking log, you should see INFO: Running migrations...
npm run log-directus

# log in and check for /admin/settings/extensions

# optional: those two steps are not necessary now (automatic migration)
 npm run migrate-directus
 npm run reload-directus

# optional: if you want to push-local with a new directus version, you can use
# npm run push-local -- --force
```
3. update CHANGELOG.md

## directus-sync

### Local
- `export DIRECTUS_LOCAL_API_TOKEN='some-key'` - specified token used for local
- `npm run up` - start CMS
- `npm run push-local` - send directus-config/ files to local directus CMS
- `npm run pull-local` - get local directus CMS configuration and save it to directus-config/

### Dev
- `export DIRECTUS_DEV_API_TOKEN='some-key'` - specified token used for dev
- `npm run push-dev` - send directus-config/ files to dev directus CMS ⚠️ Use with precaution and only on the main branch ⚠️
- `npm run pull-dev` - get dev directus CMS configuration and save it to directus-config/

### Creating a token
- Create a Administrator > Directus Sync user
- Create a private token
- Save it .directus-sync.<ENVIRONMENT_NAME>.token
- Export the value with export to use push-local and pull-local.
