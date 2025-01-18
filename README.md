
# 90North Project

## Introduction
We appreciate your participation in this project. Please review the following tasks and questions carefully and provide detailed responses. We look forward to reviewing your answers.

---

## Frontend Development

### Task 1: Create a responsive webpage with the following features:
- A fixed navbar that does not move when scrolling.
- Below the navbar, create three sections: a left menu, a main content area, and a right-side panel.
- Include a footer at the bottom.
- Make the left menu collapsible.

### Task 2: Write a JavaScript function for responsive behavior:
- If the screen width is between 992px and 1600px, shrink the page by 90%.
- If the screen width is between 700px and 767px, shrink the page by 80%.
- If the screen width is between 600px and 700px, shrink the width to 75%.
- If the screen width is less than or equal to 600px, shrink the width to 50%.

---

## Django

### Task 1: Develop a chat application with the following features:
- Users can sign up and log in.
- Display all registered users in a collapsible left menu.
- Allow the logged-in user to select any user from the menu and initiate a chat.
- Store all user data and chat messages in the database.
- Retrieve and display old messages in the chat interface.
- Use a WebSocket for chat application.
- Ensure the chat interface is user-friendly and functional.

**Commands to run the Django project:**

1. Install required dependencies:
   ```bash
   pip install -r requirements.txt
   ```

2. Remove all data migrations and run migrations:
   ```bash
   python manage.py migrate --noinput
   ```
3. Remove all data so that you will have a fresh chat
   ```bash
   python manage.py flush
   ```
4. Run the app
   ```bash
   python manage.py runserver
   ```

---

## AWS

### Task 1: Write an AWS Lambda function that adds two numbers and returns the result.
- The Lambda function performs the addition of two numbers.

### Task 2: Code an AWS Lambda function to store a document or PDF file in an S3 bucket.
- The Lambda function stores a document or PDF file in an S3 bucket.

---

## Submission Guidelines

1. Add codes to a GitHub repository and share the URL.
2. Include a README file in the GitHub repository with instructions on how to run the project.
3. Host the Django project, including the frontend, on the PythonAnywhere or AWS (https://www.pythonanywhere.com/).
4. Email the GitHub link and the PythonAnywhere link to Hr@enfund.io.

**Deadline for submission:** 16/01/2025 by 8 PM.
