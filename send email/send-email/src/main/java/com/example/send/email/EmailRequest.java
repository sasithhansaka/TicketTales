package com.example.send.email;

public class EmailRequest {
    private String email;
    private String subject;
    private String message;


    // Constructors
    public EmailRequest() {

    }

    public EmailRequest(String email, String subject, String message) {
        this.email = email;
        this.subject = subject;
        this.message = message;
    }

    // Getters and Setters
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
