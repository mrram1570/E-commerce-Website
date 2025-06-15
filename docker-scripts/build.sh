
#!/bin/bash

echo "Building Bella Couture Docker image..."

# Build the production image
docker build -t bella-couture:latest .

echo "Build completed successfully!"
echo "To run the container, use: docker run -p 8080:80 bella-couture:latest"
