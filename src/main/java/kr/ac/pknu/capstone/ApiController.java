package kr.ac.pknu.capstone;

import kr.ac.pknu.capstone.domain.Data.Data;
import kr.ac.pknu.capstone.service.DataService;
import kr.ac.pknu.capstone.web.dto.UpdateRequestDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("api")
public class ApiController {

    @Autowired
    DataService dataService;

    @GetMapping("/")
    public List<Data> root() {
        return dataService.findAll();
    }

    @GetMapping("query")
    public List<Data> query(
            @RequestParam(value = "vCPU", defaultValue = "0") int vCPU, @RequestParam(value = "Memory", defaultValue = "0") int memory
    ) throws Exception {
        return dataService.find(vCPU, memory);
    }

    @PostMapping("update")
    public void update(@RequestBody UpdateRequestDto updateRequestDto) {
        dataService.save(updateRequestDto);
    }

}
