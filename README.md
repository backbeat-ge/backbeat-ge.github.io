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
