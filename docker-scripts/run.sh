
#!/bin/bash

echo "Starting Bella Couture container..."

# Stop and remove existing container if running
docker stop bella-couture-web 2>/dev/null || true
docker rm bella-couture-web 2>/dev/null || true

# Run the new container
docker run -d \
  --name bella-couture-web \
  -p 8080:80 \
  --restart unless-stopped \
  bella-couture:latest

echo "Container started successfully!"
echo "Application is available at: http://localhost:8080"
echo "Health check available at: http://localhost:8080/health"
