package com.example.Order.service.data;

import jakarta.persistence.*;

@Entity
@Table(name="orders")
public class Order {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int order_id;

    @Column (name = "email")
    private String email;

    @Column (name = "title")
    private  String title;

    @Column (name = "event_id")
    private int event_id;

    @Column (name = "order_date")
    private String order_date;

    @Column(name = "num_tickets")
    private  int num_tickets;

    @Column (name = "total_price")
    private  int total_price;

    public int getOrder_id() {
        return order_id;
    }

    public void setOrder_id(int order_id) {
        this.order_id = order_id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getEvent_id() {
        return event_id;
    }

    public void setEvent_id(int event_id) {
        this.event_id = event_id;
    }

    public String getOrder_date() {
        return order_date;
    }

    public void setOrder_date(String order_date) {
        this.order_date = order_date;
    }

    public int getNum_tickets() {
        return num_tickets;
    }

    public void setNum_tickets(int num_tickets) {
        this.num_tickets = num_tickets;
    }

    public int getTotal_price() {
        return total_price;
    }

    public void setTotal_price(int total_price) {
        this.total_price = total_price;
    }

    public Order() {
    }
}
