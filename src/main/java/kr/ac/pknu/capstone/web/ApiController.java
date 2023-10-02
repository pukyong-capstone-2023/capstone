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
        // TODO: DTO로 수정하기
        return dataService.readJsonData();
    }

    @GetMapping("query")
    public List<Data> query(
            @RequestParam(value = "vCPU", defaultValue = "0") Integer vcpu, @RequestParam(value = "Memory", defaultValue = "0") Integer memory
    ) throws Exception {

        List<Data> data = dataService.readJsonData();

        return data.stream().filter(d ->
                (vcpu.equals(0) || d.getVCPU().equals(vcpu)) && (memory.equals(0) || d.getMemory().equals(memory))
        ).collect(Collectors.toList());

    }

    @PostMapping("update")
    public Long update(@RequestBody UpdateRequestDto updateRequestDto) {
        return dataService.save(updateRequestDto);
    }

}
