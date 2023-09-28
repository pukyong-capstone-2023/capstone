package kr.ac.pknu.capstone.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import kr.ac.pknu.capstone.domain.Data.Data;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.core.io.ClassPathResource;

import java.io.File;
import java.util.List;
import java.util.stream.Collectors;

@SpringBootTest
public class DataServiceTest {

    @Autowired
    ObjectMapper objectMapper;

    @DisplayName("json을 정상적으로 읽는지, 객체 매핑이 되는지 확인")
    @Test
    public void json_읽기() throws Exception {

        ClassPathResource resource = new ClassPathResource("data.json");
        File file = resource.getFile();
        List<Data> data = objectMapper.readValue(file, new TypeReference<List<Data>>() {});

        Assertions.assertThat(data)
                .isNotEmpty();

    }

    @DisplayName("data에서 필터링이 작동하는지 확인")
    @Test
    public void filterTest() throws Exception {

        ClassPathResource resource = new ClassPathResource("data.json");
        File file = resource.getFile();
        List<Data> data = objectMapper.readValue(file, new TypeReference<List<Data>>() {});

        Integer vcpu = 2, memory = 4;
        List<Data> res = data.stream().filter(d ->
                (vcpu.equals(0) || d.getVCPU().equals(vcpu)) && (memory.equals(0) || d.getMemory().equals(memory))
        ).collect(Collectors.toList());

        Assertions.assertThat(res)
                .isNotEmpty()
                .allMatch(d -> d.getVCPU().equals(vcpu) && d.getMemory().equals(memory));

    }

}
