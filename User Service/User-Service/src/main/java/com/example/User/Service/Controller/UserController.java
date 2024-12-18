package com.example.User.Service.Controller;


import com.example.User.Service.Data.User;
import com.example.User.Service.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController

public class UserController {

    @Autowired
    private UserService userService;

   @PostMapping (path = "/Save_user")
    public User user_save(@RequestBody User userEx ){
       return userService.user_save(userEx);

   }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody User user1) {
        boolean isAuthenticated = userService.authenticate(user1.getEmail(), user1.getPassword());
        if (isAuthenticated) {
            return ResponseEntity.ok(user1.getEmail());
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }

    @GetMapping (path = "/AllUserDeatils")

    public List<User> GetallUserDetails(){
       return userService.GetallUserDetails();
    }

    @GetMapping(path = "/detailsByemail/{email}")
    public User getProductByEmail(@PathVariable String email) {
        return userService.getProductByEmail(email);
    }


}
