package kr.ac.pknu.capstone.domain.Data;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Repository;

import java.io.File;
import java.io.IOException;
import java.util.List;

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
        File file = resource.getFile();
        return objectMapper.readValue(file, new TypeReference<List<Data>>() {});
    }

    public List<Data> findAll() throws IOException {
        return data;
    }

    public void save(Data d) throws IOException {
        data.add(d);
    }

}
