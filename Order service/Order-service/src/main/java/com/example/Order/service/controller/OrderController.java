package com.example.Order.service.controller;

import com.example.Order.service.data.Order;
import com.example.Order.service.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin ("*")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @PostMapping ("/orderSave")

    public Order saveorder (@RequestBody Order orderex){
        return orderService.saveorder(orderex);
    }



}
