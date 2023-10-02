package kr.ac.pknu.capstone.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import kr.ac.pknu.capstone.domain.Data.Data;
import kr.ac.pknu.capstone.domain.Data.DataRepository;
import kr.ac.pknu.capstone.web.dto.UpdateRequestDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.File;
import java.io.IOException;
import java.util.List;


@Service
public class DataService {

    private final ObjectMapper objectMapper;
    private final DataRepository dataRepository;

    @Autowired
    public DataService(ObjectMapper objectMapper, DataRepository dataRepository) {
        this.objectMapper = objectMapper;
        this.dataRepository = dataRepository;
    }

    public List<Data> readJsonData() throws IOException {
        ClassPathResource resource = new ClassPathResource("data.json");
        File file = resource.getFile();
        return objectMapper.readValue(file, new TypeReference<List<Data>>() {});
    }

    @Transactional
    public Long save(UpdateRequestDto updateRequestDto) {
        return dataRepository.save(updateRequestDto.toEntity()).getId();
    }

}
