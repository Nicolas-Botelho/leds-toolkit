---
sidebar_position: 3
title: How to use
layout: '~/layouts/MarkdownLayout.astro' 
---

# How to use

Follow these steps to run the project locally:

1. Clone the project to your local machine.

2. Generate a personal Github token and insert it on **GITHUB_TOKEN** in the `example.env` file.
    - Can be generated here: [https://github.com/settings/tokens](https://github.com/settings/tokens)

3. Generate a personal Gemini token and insert it on **GEMINI_API_KEY** in the `example.env`file.
    - Can be generated [https://aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey)

3. Rename the `example.env` file to `.env`

4. In the `main.py` file: Update the variable **repos** to your repositories, following the pattern. 
    - The repositories must be acessible through your given token.

5. Utilize the following commands to initiate the services.
    ps.: This, creating containers and setting up the environment inside the container, could take while

    To start the project:
    ```bash
      docker compose up -d
    ```

    To stop the project later, you can run:
    ```bash
      docker compose down
    ```

6. After the **Open Web UI** container finishes setting up:
    - Go to Open web UI initial page: [http://localhost:3000/](http://localhost:3000/)
    - Create your local account. Dont worry, your email wont be verified
    - After logged in, go to [http://localhost:3000/admin/functions](http://localhost:3000/admin/functions)
    - In the **Functions** page, click on **import functions**
    - Select the file **pipeline_api.json**( at `src/assets/open_web_ui/pipeline_api.json`) in the `src/assets/open_web_ui/` folder
    - Activate the function through a slider on the top-right corner
    - Return to the initial page with [http://localhost:3000](localhost:3000)

# AWS Configuration

If you want to deploy the project follow these steps below and the you can follow the how to use inside de server.

## How to connect to AWS 

You can watch our video tutorial [clicking here](https://drive.google.com/file/d/1k6P_njHA6KgJh8_ulI57ZGdd4S5V93Ob/view)

## Some commands that will be used to configure the AWS machine

### Generating SSH Key

```bash
ssh-keygen
```

```bash
cat ~/.ssh/id_rsa.pub
```

### Setting up Docker

```bash
sudo apt-get update
```

```bash
sudo apt-get install ca-certificates curl gnupg
```

```bash
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg
```

```bash
echo   "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu   $(. /etc/os-release && echo $VERSION_CODENAME) stable" |   sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

```bash
sudo apt-get update
```

```bash
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

```bash
sudo groupadd docker
```

```bash
sudo usermod -aG docker $USER
```

```bash
newgrp docker
```