# my-kubernetes-app

## Introduction

This project demonstrates a simple full-stack web application consisting of a front-end "Click on me" component and a basic back-end server. The application is containerized using Docker and orchestrated using Kubernetes, showcasing fundamental DevOps practices.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Docker
- Kubernetes cluster set up, I used Docker-Desktop for the single node cluster
- kubectl command-line tool installed

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Setting Up the Project

1. Clone the repository

2. Navigate into the project directory

## Frontend

3. Navigate to the src/frontend directory:
    ```bash
    cd my-kubernetes-app/src/frontend

4. Install the necessary npm packages:
    ```bash
    npm install express
    npm install serve

5. Run the front-end application (optional if using Docker):
    ```bash
    npm start

## Backend

6. Navigate to the src/backend directory:
    ```bash
    cd my-kubernetes-app/src/backend

7. Install the necessary npm packages:
    ```bash
    npm install serve
    npm install express

8. Run the back-end server (optional if using Docker):
    ```bash
    node server.js

## Docker

9. Build and run the Docker containers:
    ```bash
    docker build -t my-kubernetes-app-frontend ./src/frontend
    docker build -t my-kubernetes-app-backend ./src/backend

## Deploying to Kubernetes

10. Deploying to Kubernetes:
    ```bash
    kubectl apply -f kubernetes/

11. Ensure the pods are running:
    ```bash
    kubectl get pods

12. Access the application via the exposed service:
    ```bash
    kubectl get service frontend-service
