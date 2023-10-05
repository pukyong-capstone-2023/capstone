package kr.ac.pknu.capstone.service;

import kr.ac.pknu.capstone.domain.Data.Data;
import kr.ac.pknu.capstone.domain.Data.DataRepository;
import kr.ac.pknu.capstone.web.dto.UpdateRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;


@Service
@RequiredArgsConstructor
public class DataService {

    private final DataRepository dataRepository;

    public List<Data> findAll() {
        return dataRepository.findAll();
    }

    public List<Data> find(int vCPU, int memory) {
        // TODO: 이것도 옮기기
        return dataRepository.findAll().stream().filter(d ->
                (vCPU == 0 || d.getVcpu().equals(vCPU)) && ( memory == 0 || d.getMemory().equals(memory))
        ).collect(Collectors.toList());
    }

    public void save(UpdateRequestDto updateRequestDto) {
        dataRepository.save(updateRequestDto.toEntity());
    }

}
