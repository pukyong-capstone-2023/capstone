package kr.ac.pknu.capstone.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import kr.ac.pknu.capstone.domain.Data.Data;
import kr.ac.pknu.capstone.domain.Data.DataRepository;
import kr.ac.pknu.capstone.web.dto.UpdateRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.File;
import java.io.IOException;
import java.util.List;


@Service
@RequiredArgsConstructor
public class DataService {

    private final ObjectMapper objectMapper;
    private final DataRepository dataRepository;

    /**
     * @deprecated json을 읽는 코드입니다. JPA를 사용하는 'findAll'을 대신 사용해주세요!
     */
    @Deprecated
    public List<Data> readJsonData() throws IOException {
        ClassPathResource resource = new ClassPathResource("data.json");
        File file = resource.getFile();
        return objectMapper.readValue(file, new TypeReference<List<Data>>() {});
    }

    @Transactional
    public List<Data> findAll() {
        return dataRepository.findAll();
    }

    @Transactional
    public Long save(UpdateRequestDto updateRequestDto) {
        return dataRepository.save(updateRequestDto.toEntity()).getId();
    }

}
