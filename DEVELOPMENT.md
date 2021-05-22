# Course Management Hub

**Overview:** Course Management Hub is a web application that helps students with organizing their courses, workload and activities throughout the semester.

**Team:** Minh Phan, Bach Ta

**Idea Credits:** Minh Phan, Cale Wolf, Meghna Mavila, Ayushi Singh, Rithika Bhattaram.

## Background

> In order to keep track of their classes, an student has to manage his/her information on least 6 websites per semester. As COVID-19 strikes, the university shifted remotely. The number of sites that students have to manage eventually increases.

**&#8594; Solution:** A central hub that allows students to keep track of their course management systems in an organized manner.

## Language & Framework

- Frontend: ReactJS

  - Material UI

- Backend: Python Flask

  - flask_pymongo

- Database: MongoDB

  - MongoDB Compass

- Deployment: Docker & Nginx

## Project Structure

#### **1. Deployment Structure**

**<p style="text-align: center"> Host Operating System with Docker installed</p>**

```text
                    ___ Web UI (React) ------------ (Docker container)
                   /
                  .
frontend network |
                  .
                   \____ RESTful API (Flask) ------ (Docker container)
                   /
                  .
backend network  |
                  .
                   \____ Database (MongoDB) ------- (Docker container)
```

There are 2 choices of deployment:

- Deploy on a single machine or a single Docker container
- Deploy different parts of the web on different containers

<br>

#### **2. Repository Structure**

```text
.
├── backend
|   |── Dockerfile
|   └── requirement.txt
├── frontend
│   ├── public
│   |── src
│   ├── Dockerfile
│   |── Dockerfile-prod
│   └── nginx.conf
│   └── package.json
|
├── docker-compose.yml
└── docker-compose-prod.yml

```
