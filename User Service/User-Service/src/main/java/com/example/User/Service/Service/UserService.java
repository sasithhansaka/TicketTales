package com.example.User.Service.Service;

import com.example.User.Service.Data.User;
import com.example.User.Service.Data.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

            @Autowired
            private UserRepository userRepository;


           public User user_save(User user_ex){
               return userRepository.save(user_ex);
           }

    public boolean authenticate(String email, String password) {
        Optional<User> userOptional = userRepository.findByEmail(email);
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            return user.getPassword().equals(password);
        }
        return false;
    }

}
