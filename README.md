# my-kubernetes-app

## Introduction

This project demonstrates a simple full-stack web application consisting of a front-end "Click on me" component and a basic back-end server. The application is containerized using Docker and orchestrated using Kubernetes, showcasing fundamental DevOps practices.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Docker and Docker Compose installed
- Kubernetes cluster set up, I used Docker-Desktop
- kubectl command-line tool installed

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Setting Up the Project

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/your-username/my-kubernetes-app.git

2. Navigate into the project directory:
    cd my-kubernetes-app

## Frontend

3. Navigate to the src/frontend directory:
    cd my-kubernetes-app/src/frontend

4. Install the necessary npm packages:
    npm install

5. Run the front-end application (optional if using Docker):
    npm start

## Backend

6. Navigate to the src/backend directory:
    cd my-kubernetes-app/src/backend

7. Install the necessary npm packages:
    npm install

8. Run the back-end server (optional if using Docker):
    node server.js

## Docker

9. Build and run the Docker containers:
    docker-compose up --build

## Deploying to Kubernetes

10. Deploying to Kubernetes:
    kubectl apply -f kubernetes/

11. Ensure the pods are running:
    kubectl get pods

12. Access the application via the exposed service:
    kubectl get service frontend-service






