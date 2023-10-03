package kr.ac.pknu.capstone.domain.Data;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Repository;

import java.io.File;
import java.io.IOException;
import java.util.List;

@Repository
public class DataRepository {

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

    public void save(Data d) throws IOException {
        if(data == null) readJsonData();
        data.add(d);
    }

}
