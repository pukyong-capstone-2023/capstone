package kr.ac.pknu.capstone;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api")
public class HelloController {
    private static final String HELLO = "hello";

    @GetMapping(HELLO)
    public ResponseEntity<String> hello() {
        return ResponseEntity.ok(HELLO);
    }
}
