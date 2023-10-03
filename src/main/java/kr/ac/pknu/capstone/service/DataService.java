package kr.ac.pknu.capstone.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import kr.ac.pknu.capstone.domain.Data.Data;
import kr.ac.pknu.capstone.web.dto.UpdateRequestDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;


@Service
public class DataService {

    @Autowired
    ObjectMapper objectMapper;

    List<Data> data;

    private void readJsonData() throws IOException {
        ClassPathResource resource = new ClassPathResource("data.json");
        File file = resource.getFile();
        data = objectMapper.readValue(file, new TypeReference<List<Data>>() {});
    }

    public List<Data> findAll() throws IOException {
        if(data == null) readJsonData();
        return data;
    }

    public List<Data> find(int vCPU, int memory) throws IOException {
        if(data == null) readJsonData();
        return data.stream().filter(d ->
                (vCPU == 0 || d.getVcpu().equals(vCPU)) && ( memory == 0 || d.getMemory().equals(memory))
        ).collect(Collectors.toList());
    }

    public void save(UpdateRequestDto updateRequestDto) throws IOException {
        if(data == null) readJsonData();
        data.add(updateRequestDto.toEntity());
    }

}
