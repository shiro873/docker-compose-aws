## Multi-Container Application with Docker Compose

This project uses Docker Compose to run a multi-container application consisting of the following services:

* **Traefik:** Reverse Proxy server for routing traffic.
* **Laravel:**  Laravel API server.
* **Node.js Express:** Node.js Express API server.
* **Flask:** Python Flask api service.
* **React.js:** React.js web application.
* **Databases:**
    * MySQL
    * PostgreSQL
    * MongoDB
* **Redis:**  In-memory cache server.

**Prerequisites:**

* Docker installed ([https://www.docker.com/](https://www.docker.com/))
* Docker Compose installed ([https://docs.docker.com/compose/install/](https://docs.docker.com/compose/install/))

**Setup:**

1. Clone this repository.
2. Update the environment variables in `docker-compose.yml` with your desired passwords and database names.
3. Build and run the application:
    ```bash
    docker-compose up -d
    ```
    This will build the images for each service and start them in detached mode.
4. To run specific services
    ```bash
    docker-compose up -d <service 1> <service 2>
    ```
    for example
    ```bash
    docker-compose up -d node react ...

**Accessing Services:**

* **Traefik:** The application is accessible on port `80` of your host machine (http://localhost). Traefik will route requests based on configuration in `docker.compose`. The traefik dashboard is acccessible on port 8080 (http://localhost:8080)
* **Laravel:** Accessible on port `8000` (http://localhost:8000) & (http://laravel.localhost).
* **Node.js Express:** Accessible on port `5000` (http://localhost:3001) & (http://node.localhost).
* **Flask:** Accessible on port `5000` (http://localhost:5000) & (http://node.localhost)
* **React.js:** Accessible on port `3000` (http://localhost:3000) & (http://localhost).

**Developing with Docker Compose:**

By mounting your local code directories as volumes in the corresponding services, you can develop and see changes reflected within the containers without rebuilding the images.

* Edit code in the following directories:
    * `./laravel` for Laravel code.
    * `./node` for Node.js Express code.
    * `./react` for React.js code.
    * `./python` for Flask code.
* Changes will be automatically reflected when the container detects modifications.

**Stopping and Removing Services:**

* To stop all services:
    ```bash
    docker-compose down
    ```
* To remove all services and volumes:
    ```bash
    docker-compose down -v
    ```

**For Development:**

* To restart all services:
    ```bash
    docker-compose down && docker-compose up -d
    ```
    
