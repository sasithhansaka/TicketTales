package com.example.Event.Service.Controller;

import com.example.Event.Service.Data.Event;
import com.example.Event.Service.Data.EventRepo;
import com.example.Event.Service.Service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@CrossOrigin ("*")
@RestController

public class EventController {


        @Autowired
            private EventService eventService;

        @GetMapping(path = "/AllEvents")
        public List<Event> GetAllEventDetails(){
            return eventService.GetAllEventDetails();
        }





    @PostMapping(path = "/SaveEvent")
    public Event eventSave(
            @RequestParam("title") String title,
            @RequestParam("venue") String venue,
            @RequestParam("show_date") String showDate,
            @RequestParam("show_description") String showDescription,
            @RequestParam("ticket_type") String ticket_type,
            @RequestParam("ticket_price") Double ticketPrice,
            @RequestParam("available_seats") int availableSeats,
            @RequestParam("date_time") String date_time,
            @RequestParam("image") MultipartFile image)
            throws IOException {

        byte[] imageBytes = image.getBytes();

        Event event = new Event();
        event.setTitle(title);
        event.setVenue(venue);
        event.setShow_date(showDate);
        event.setShow_description(showDescription);
        event.setTicket_type(ticket_type);
        event.setTicket_price(ticketPrice);
        event.setAvailable_seats(availableSeats);
        event.setDate_time(date_time);
        event.setImage(imageBytes);

        return eventService.eventSave(event);
    }

    @GetMapping(path = "/EventById/{eid}")
    public Event GetEventById(@PathVariable int eid) {
        return eventService.GetEventById(eid);
    }




}
