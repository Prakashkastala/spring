package com.fullstack.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fullstack.backend.model.User;
import com.fullstack.backend.repository.UserRepository;

@RestController
@CrossOrigin("http://localhost:3000/")
public class UserController {
@Autowired
UserRepository userrepository;
@PostMapping("/users")
User newuser(@RequestBody User user) {
 return userrepository.save(user);
}
@GetMapping("/users")
public List<User> getallusers(){
	return userrepository.findAll();
}
@DeleteMapping("/users/{id}")
String deleteUser(@PathVariable Long id) {
	return "user with id "+id+"has been deleted";
}
}
