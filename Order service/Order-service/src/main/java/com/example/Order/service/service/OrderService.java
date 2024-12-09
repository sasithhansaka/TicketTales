package com.example.Order.service.service;

import com.example.Order.service.data.Order;
import com.example.Order.service.data.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    public Order saveorder(Order orderex){
        return orderRepository.save(orderex);
    }
}
