package com.example.Event.Service.Data;


import jakarta.persistence.*;

@Entity
@Table(name = "show_events")

public class Event {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id;

    @Column (name = "title")
    private String title;

    @Column (name = "venue")
    private String venue;

    @Column (name = "show_date")
    private String show_date;

    @Column (name = "_description")
    private String show_description;

    @Column (name = "ticket_price")
    private Double  ticket_price;

    @Column (name = "available_seats")
    private int available_seats;

    @Lob
    @Column(name = "image")
    private byte[] image;

    @Column (name = "ticket_type")
    private String ticket_type;

    @Column (name = "date_time")
    private String date_time;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getVenue() {
        return venue;
    }

    public void setVenue(String venue) {
        this.venue = venue;
    }

    public String getShow_date() {
        return show_date;
    }

    public void setShow_date(String show_date) {
        this.show_date = show_date;
    }

    public String getShow_description() {
        return show_description;
    }

    public void setShow_description(String show_description) {
        this.show_description = show_description;
    }

    public Double getTicket_price() {
        return ticket_price;
    }

    public void setTicket_price(Double ticket_price) {
        this.ticket_price = ticket_price;
    }

    public int getAvailable_seats() {
        return available_seats;
    }

    public void setAvailable_seats(int available_seats) {
        this.available_seats = available_seats;
    }

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }


    public String getTicket_type() {
        return ticket_type;
    }

    public void setTicket_type(String ticket_type) {
        this.ticket_type = ticket_type;
    }

    public String getDate_time() {
        return date_time;
    }

    public void setDate_time(String date_time) {
        this.date_time = date_time;
    }

    public Event() {

    }
}
