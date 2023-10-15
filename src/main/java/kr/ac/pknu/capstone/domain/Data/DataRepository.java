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

    @Autowired
    public DataRepository(ObjectMapper objectMapper) throws IOException {
        this.objectMapper = objectMapper;
        this.data = readJsonData();
    }

    private List<Data> readJsonData() throws IOException {
        ClassPathResource resource = new ClassPathResource("data.json");
        return objectMapper.readValue(resource.getInputStream(), new TypeReference<List<Data>>() {});
    }

    private void saveJsonData() throws Exception {

        // TODO: 테스트코드 작성해서 작동 확인 후 save에 추가하기
        // 테스트코드에서는 vendor를 'test'로 하고, afterEach에서 제거해주기
        ClassPathResource resource = new ClassPathResource("data.json");
        File file = resource.getFile();
        FileWriter writer = new FileWriter(file, false);
        writer.write(objectMapper.writeValueAsString(data));
        writer.close();

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
