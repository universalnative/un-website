# Universal Native Website

[![Build Status](https://travis-ci.com/universalnative/un-website.svg?branch=master)](https://travis-ci.com/universalnative/un-website) [![Netlify Status](https://api.netlify.com/api/v1/badges/87517ced-e95a-4fc1-b778-2a1fcabac321/deploy-status)](https://app.netlify.com/sites/jovial-shockley-a5e7ec/deploys)

A flood of details coming soon...

### Architecture

1. Application architecture (how to Next.js and WordPress work together)
2. Docker setup

### Pre-reqs

Stuff you need to have to run this locally.

### Environment Variables

### Running

This application is containerized using Docker. Follow the steps below to run the app in Docker.

All commands assume you are cd'd into the root folder of this app (eg. "un-website").

> One may run it as a regular Node.js app locally (yarn start), but that is discouraged. This is because the app depends on a headless version of WordPress and a MySQL/MariaDB database, maintaining which separately would be bad for portability and having a consistent development environment.

1. Start all Docker containers:

```
$ docker-compose up
```

This command will take several minutes when run the first time. Subsequent runs will be much-much faster.

2. Once the **wp** container is up and running\*, visit http://localhost:8080/wp-admin. Log in using the credentials found inside .env.example file.

> \* You know the wp container is completely up when you see this message log in your console:
>
> `wp | [core:notice] [pid 1] AH00094: Command line: 'apache2 -D FOREGROUND'`

3. On logging into WordPress, create a couple of blog posts.

4. Once the **app** container is up and running\*, visit http://localhost:3000. You should see the posts you created above listed here.

> \* You know the app container is completely up when you see this message log in your console:
>
> `app | [ ready ] compiled successfully - ready on http://localhost:3000`

5. (optional) Install NPM packages locally (on host). This will be helpful in debugging locally.

```
$ npm i
```

### Debugging

### Static Site Generation (SSG)

### Deploying

1. As a dynamic site (SSR)
2. As a static site (SSG)
3. As Docker containers
4. As separate, non-container services

### Testing

Running and adding unit tests.

### CI/CD

Build and test automation.
