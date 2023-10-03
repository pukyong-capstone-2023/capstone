package kr.ac.pknu.capstone.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import kr.ac.pknu.capstone.domain.Data.Data;
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

    public List<Data> find(int vcpu, int memory) throws IOException {
        if(data == null) readJsonData();
        return data.stream().filter(d ->
                (vcpu == 0 || d.getVCPU().equals(vcpu)) && ( memory == 0 || d.getMemory().equals(memory))
        ).collect(Collectors.toList());
    }

}
