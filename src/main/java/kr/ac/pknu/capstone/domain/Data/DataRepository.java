package kr.ac.pknu.capstone.domain.Data;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Repository;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;
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

    private void saveJsonData() throws Exception {

        // TODO: 테스트코드 작성해서 작동 확인 후 save에 추가하기
        ClassPathResource resource = new ClassPathResource("data.json");
        File file = resource.getFile();
        FileWriter writer = new FileWriter(file, false);
        writer.write(objectMapper.writeValueAsString(data));
        writer.close();

    }

    public List<Data> findAll() {
        return data;
    }

    public void save(Data d) {
        data.add(d);
    }

}
