package kr.ac.pknu.capstone;

import com.fasterxml.jackson.databind.ObjectMapper;
import kr.ac.pknu.capstone.domain.Data.Data;
import org.springframework.core.io.ClassPathResource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;

@RestController
@RequestMapping("api")
public class ApiController {

    @GetMapping("/")
    public Data[] root() throws Exception {
        // 일단 데이터를 통짜로 넘기는 것부터

        ObjectMapper objectMapper = new ObjectMapper();

        ClassPathResource resource = new ClassPathResource("data.json");
        File file = resource.getFile();
        Data[] datas = objectMapper.readValue(file, Data[].class);

        return datas;
    }

}
