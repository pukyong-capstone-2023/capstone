package kr.ac.pknu.capstone;

import kr.ac.pknu.capstone.domain.Data.Data;
import kr.ac.pknu.capstone.service.DataService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("api")
public class ApiController {

    private final DataService dataService;

    public ApiController(DataService dataService) {
        this.dataService = dataService;
    }

    @GetMapping("/")
    public List<Data> root() throws Exception {
        // JPA로 옮기면 수정할 것
        return dataService.readJsonData();
    }

    @GetMapping("query")
    public List<Data> query(
            @RequestParam(value = "vCPU", defaultValue = "0") Integer vcpu, @RequestParam(value = "Memory", defaultValue = "0") Integer memory
    ) throws Exception {

        List<Data> data = dataService.readJsonData();

        // TODO: 이 부분도 옮기기
        return data.stream().filter(d ->
                (vcpu.equals(0) || d.getVCPU().equals(vcpu)) && (memory.equals(0) || d.getMemory().equals(memory))
        ).collect(Collectors.toList());

    }

}
