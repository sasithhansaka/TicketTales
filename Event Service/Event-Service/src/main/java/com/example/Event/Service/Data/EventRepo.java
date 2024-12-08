package com.example.Event.Service.Data;

import org.springframework.data.jpa.repository.JpaRepository;


public interface EventRepo extends JpaRepository<Event,Integer> {
}
