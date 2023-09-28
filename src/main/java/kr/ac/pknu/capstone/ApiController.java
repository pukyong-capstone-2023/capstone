package kr.ac.pknu.capstone;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import kr.ac.pknu.capstone.domain.Data.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("api")
public class ApiController {

    @Autowired
    ObjectMapper objectMapper;

    private List<Data> readJsonData() throws IOException {
        ClassPathResource resource = new ClassPathResource("data.json");
        File file = resource.getFile();
        return objectMapper.readValue(file, new TypeReference<List<Data>>() { });
    }

    @GetMapping("/")
    public List<Data> root() throws Exception {
        // JPA로 옮기면 수정할 것
        return readJsonData();
    }

    @GetMapping("query")
    public List<Data> query(
            @RequestParam(value = "vCPU", defaultValue = "0") Integer vcpu, @RequestParam(value = "Memory", defaultValue = "0") Integer memory
    ) throws Exception {

        List<Data> data = readJsonData();

        return data.stream().filter(d ->
                (vcpu.equals(0) || d.getVCPU().equals(vcpu)) && (memory.equals(0) || d.getMemory().equals(memory))
        ).collect(Collectors.toList());

    }

}
