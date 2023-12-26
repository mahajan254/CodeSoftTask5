package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Student;
import com.example.demo.repository.StudentRepository;
@CrossOrigin(origins="http://localhost:3000"
		+ "")
@RestController
@RequestMapping("/api/v1")
public class StudentController {

	@Autowired
	private StudentRepository studentRepository;
	
	
	@GetMapping("/student")
	public List<Student> getAllStudent()
	{
		return studentRepository.findAll();
		
	}
	
	
	@PostMapping("/student")
	public Student createStudent(@RequestBody Student student) 
		{
			return  studentRepository.save(student);
		}
	@GetMapping("/student/{id}")
	public ResponseEntity<Student>getStudentById(@PathVariable Long id)
	{
		Student student = studentRepository.findById(id).orElseThrow ();
		return ResponseEntity.ok(student);
	}
	@PutMapping("/student/{id}")
	public ResponseEntity<Student> updateStudent(@PathVariable Long id,@RequestBody Student studentDetails)
	{
		Student student = studentRepository.findById(id).orElseThrow ();
		//return ResponseEntity.ok(student);
		
		student.setFirstName(studentDetails.getFirstName());
		student.setLastName(studentDetails.getLastName());
		student.setEmailId(studentDetails.getEmailId());
		
		Student updatedStudent = studentRepository.save(student);
		return ResponseEntity.ok(updatedStudent);
	}
	@DeleteMapping("/student/{id}")
	public ResponseEntity<Map<String,Boolean>>deleteStudent(@PathVariable Long id)
	{
		Student student = studentRepository.findById(id).orElseThrow ();
		
		studentRepository.delete(student);
		Map<String,Boolean> response = new HashMap<>();
		response.put("deleted",Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
	
}
