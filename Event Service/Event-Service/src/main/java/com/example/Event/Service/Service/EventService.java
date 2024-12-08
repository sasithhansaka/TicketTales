package com.example.Event.Service.Service;

import com.example.Event.Service.Data.Event;
import com.example.Event.Service.Data.EventRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EventService {
    @Autowired
    private EventRepo eventRepo;


    public List<Event> GetAllEventDetails(){
        return eventRepo.findAll();
    }

    public  Event eventSave (Event eventex){
        return eventRepo.save(eventex);
    }

    public Event GetEventById(int id){
        Optional<Event> event= eventRepo.findById(id);
        return event.orElse(null);
    }


}
