package kr.ac.pknu.capstone.domain.Data;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Repository;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

@Repository
public class DataRepository {

    private final ObjectMapper objectMapper;
    private final List<Data> data;

    public DataRepository(ObjectMapper objectMapper) throws IOException {
        this.objectMapper = objectMapper;
        this.data = readJsonData();
    }

    private List<Data> readJsonData() throws IOException {
        ClassPathResource resource = new ClassPathResource("data.json");
        return objectMapper.readValue(resource.getInputStream(), new TypeReference<List<Data>>() {});
    }

    public List<Data> findAll() {
        return data;
    }

    public List<Data> search(int vCPU, int memory) {
        return data.stream().filter(d ->
                (vCPU == 0 || d.getVcpu().equals(vCPU)) && ( memory == 0 || d.getMemory().equals(memory))
        ).collect(Collectors.toList());
    }

    public void save(Data d) {
        data.add(d);
    }

}
