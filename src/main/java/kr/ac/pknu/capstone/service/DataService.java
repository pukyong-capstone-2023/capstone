package kr.ac.pknu.capstone.service;

import kr.ac.pknu.capstone.domain.Data.Data;
import kr.ac.pknu.capstone.domain.Data.DataRepository;
import kr.ac.pknu.capstone.web.dto.UpdateRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
@RequiredArgsConstructor
public class DataService {

    private final DataRepository dataRepository;

    public List<Data> findAll() {
        return dataRepository.findAll();
    }

    public List<Data> find(int vCPU, int memory) {
        return dataRepository.search(vCPU, memory);
    }

}
