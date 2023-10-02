package kr.ac.pknu.capstone.web;

import kr.ac.pknu.capstone.domain.Data.Data;
import kr.ac.pknu.capstone.service.DataService;
import kr.ac.pknu.capstone.web.dto.UpdateRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("api")
@RequiredArgsConstructor
public class ApiController {

    private final DataService dataService;

    @GetMapping("/")
    public List<Data> root() throws Exception {
        return dataService.findAll();
    }

    @GetMapping("query")
    public List<Data> query(
            @RequestParam(value = "vCPU", defaultValue = "0") Integer vcpu, @RequestParam(value = "Memory", defaultValue = "0") Integer memory
    ) throws Exception {

        List<Data> data = dataService.findAll();

        // TODO: dataService 내에서 로직 처리하도록 변경하기
        return data.stream().filter(d ->
                (vcpu.equals(0) || d.getVCPU().equals(vcpu)) && (memory.equals(0) || d.getMemory().equals(memory))
        ).collect(Collectors.toList());

    }

    @PostMapping("update")
    public Long update(@RequestBody UpdateRequestDto updateRequestDto) {
        return dataService.save(updateRequestDto);
    }

}
