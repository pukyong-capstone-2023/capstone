package kr.ac.pknu.capstone;

import kr.ac.pknu.capstone.domain.Data.Data;
import kr.ac.pknu.capstone.service.DataService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("api")
public class ApiController {

    private final DataService dataService;
    @GetMapping("/")
    public List<Data> root() {
        return dataService.findAll();
    }

    @GetMapping("query")
    public List<Data> query(
            @RequestParam(value = "vCPU", defaultValue = "0") int vCPU,
            @RequestParam(value = "Memory", defaultValue = "0") int memory
    ) throws Exception {
        return dataService.find(vCPU, memory);
    }

}
