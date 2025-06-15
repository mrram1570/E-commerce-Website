
# Welcome to Rampandu's Portfolio Website Project

## Project Info

**URL**: [GitHub Repository](https://github.com/mrram1570/rampandu-digital-forge.git)

## 🐳 Docker Setup (WebServer using Docker)

This project is containerized using Docker with Nginx serving the built React application.

### Prerequisites

- Docker installed on your system
- Docker Compose (optional, for development)

### Quick Start with Docker

#### Production Build
```bash
# Build the Docker image
docker build -t bella-couture:latest .

# Run the container
docker run -p 8080:80 bella-couture:latest
```

#### Using Docker Compose
```bash
# Production environment
docker-compose up -d

# Development environment with hot reload
docker-compose --profile dev up --build web-dev
```

#### Using Helper Scripts
```bash
# Make scripts executable
chmod +x docker-scripts/*.sh

# Build the image
./docker-scripts/build.sh

# Run production container
./docker-scripts/run.sh

# Run development environment
./docker-scripts/dev.sh
```

### Accessing the Application

- **Production**: http://localhost:8080
- **Development**: http://localhost:3000
- **Health Check**: http://localhost:8080/health

### Docker Features

- **Multi-stage build** for optimized production images
- **Nginx** web server with optimized configuration
- **Gzip compression** for better performance
- **Security headers** for enhanced security
- **Health checks** for container monitoring
- **Hot reload** for development environment

### Container Management

```bash
# View running containers
docker ps

# View logs
docker logs bella-couture-web

# Stop container
docker stop bella-couture-web

# Remove container
docker rm bella-couture-web

# View container stats
docker stats bella-couture-web
```

## How Can I Edit This Code?

There are several ways to edit your application:

### Use Lovable

Simply visit the [GitHub repository](https://github.com/mrram1570/rampandu-digital-forge.git) and start prompting. Changes will be committed automatically to this repo.

### Use Your Preferred IDE

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable. The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone https://github.com/mrram1570/rampandu-digital-forge.git

# Step 2: Navigate to the project directory.
cd rampandu-digital-forge

# Step 3: Install the necessary dependencies.
npm install

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

### Development with Docker

For a consistent development environment using Docker:

```sh
# Clone the repository
git clone https://github.com/mrram1570/rampandu-digital-forge.git
cd rampandu-digital-forge

# Start development environment
docker-compose --profile dev up --build web-dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- Docker & Nginx (for containerization)

## How can I deploy this project?

### Local Deployment with Docker

1. Build the Docker image:
```bash
docker build -t bella-couture:latest .
```

2. Run the container:
```bash
docker run -p 8080:80 bella-couture:latest
```

### Production Deployment

The containerized application can be deployed to any container orchestration platform:

- **Docker Swarm**
- **Kubernetes**
- **AWS ECS**
- **Azure Container Instances**
- **Google Cloud Run**

Example Kubernetes deployment:
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: bella-couture
spec:
  replicas: 3
  selector:
    matchLabels:
      app: bella-couture
  template:
    metadata:
      labels:
        app: bella-couture
    spec:
      containers:
      - name: web
        image: bella-couture:latest
        ports:
        - containerPort: 80
```

## Can I connect a custom domain to the project?

Yes, you can! 

For Lovable deployments:
To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

For Docker deployments:
Configure your reverse proxy (Nginx, Traefik, etc.) or load balancer to route traffic to your container.

## Troubleshooting

### Common Docker Issues

1. **Port already in use**: Change the host port in docker-compose.yml or run command
2. **Permission denied**: Make sure Docker daemon is running and user has proper permissions
3. **Build failures**: Check that all dependencies are correctly specified in package.json

### Container Logs
```bash
# View real-time logs
docker logs -f bella-couture-web

# View last 100 lines
docker logs --tail 100 bella-couture-web
```
