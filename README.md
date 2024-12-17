# TicketTales - Musical Show Ticket Booking

## Features
- User registration and authentication,Browse upcoming musical shows and events,View event details and location,Make ticket bookings with email confirmation,Admin dashboard for managing events and users,Admin dashboard with visualizations using React Charts,Payment integration (optional)

## Tech Stack
-Frontend- React (Vite), CSS /Backend: Spring Boot, Java /Database: MySQL Workbench

## Prerequisites
Make sure you have the following installed on your local machine:
- Node.js (v14 or higher)
- npm or yarn (npm is recommended)
- JDK 11 or higher
- MySQL or any compatible RDBMS
- Maven (for building the Spring Boot application)

## 1. Clone the repository
Clone this repository to your local machine:
git clone https://github.com/sasithhansaka/TicketTales.git

## Set up the backend
Navigate to the backend directory (or microservices folder, if applicable).

##Configure your MySQL database:
-Create a new MySQL database for the project (e.g., tickettales_db).
-Important: Do not use default database credentials. Instead, create your own username and password for security purposes.
-Modify src/main/resources/application.properties to set your database connection details:

spring.datasource.url=jdbc:mysql://localhost:3306/your-database-name
spring.datasource.username=your-username
spring.datasource.password=your-password

Email Confirmation Setup: To enable email confirmations for ticket bookings, you will need to configure an SMTP email service (like Gmail, SendGrid, etc.) in the backend's application configuration.

Update the application.properties file in the backend with the following email service settings (using Gmail as an example):

spring.mail.host=smtp.gmail.com
spring.mail.port=587
spring.mail.username=your-email@gmail.com
spring.mail.password=your-email-password
spring.mail.properties.mail.smtp.auth=true
spring.mail.properties.mail.smtp.starttls.enable=true
Make sure to replace your-email@gmail.com and your-email-password with your actual credentials or use environment variables for sensitive information.

Run the Spring Boot application:
You should run the four services in different ports:
The backend services should run on:
http://localhost:8080
http://localhost:8081
http://localhost:8082
http://localhost:8083
Set up the frontend
Navigate to the frontend directory:
cd Tcikettales

Install frontend dependencies:
npm install
Install Axios for making HTTP requests:
npm install axios
Run the React development server:
npm run dev
The frontend will be running on http://localhost:5173.

React Chart Integration
To display event-related data visualizations in the admin dashboard, you'll use React Charts. Install the required dependencies for charting:
npm install react-chartjs-2 chart.js

Final Instructions
Backend: The Spring Boot application should be running on the following URLs:

http://localhost:8080
http://localhost:8081
http://localhost:8082
http://localhost:8083
Frontend: The React application should be running on http://localhost:5173.

Database: Don't forget to set up your MySQL database and configure the database credentials in application.properties.

For email confirmations, make sure to use a valid email SMTP provider (e.g., Gmail, SendGrid).

React Chart: Admin dashboard visualizations will work after installing react-chartjs-2 and chart.js.


-end-
