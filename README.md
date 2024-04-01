# README

## Development

The project can be run using Docker Compose:

```bash
# Pull the necessary images and initialise the service.
docker-compose up -d

# Start/stop/restart the service.
docker-compose start
docker-compose stop
docker-compose restart

# Destroy the installation to free resources.
docker-compose down -v
```

Should extra packages need to be installed or the server accessed directly:

```bash
# Open a terminal on the running service.
docker-compose exec astro bash
```

### Accessing

When developing with Docker, the site will be available at `http://localhost:4321/fr/`, the admin interface at `http://localhost:4001/admin/`

> ‼️ Because of our custom initial redirection, one needs to make sure to access the full path to one of the locales. Otherwise, `http://localhost:4321` for example, will currently redirect to our public site (`https://backbeat-ge.github.io`).

## Tools

### Tailwind

- Color palette: https://tailwindcss.com/docs/customizing-colors

---

**Initialisation**

We created the Astro app using their CLI tool by running the necessary commands on a clean NodeJS image, snychronising the `/app` folder with our project's root folder:

```bash
# Make sure the current directory's absolute path doesn't contain espaces or other special characters.
docker run -it --rm --volume "$(pwd)":/app --entrypoint bash node:lts
```
