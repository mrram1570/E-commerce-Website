
#!/bin/bash

echo "Starting development environment with Docker Compose..."

# Start development services
docker-compose --profile dev up --build web-dev

echo "Development server started at: http://localhost:3000"
