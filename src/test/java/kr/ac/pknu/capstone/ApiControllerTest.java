package kr.ac.pknu.capstone;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import kr.ac.pknu.capstone.domain.Data.Data;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.MediaType;
import org.springframework.restdocs.mockmvc.MockMvcRestDocumentation;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.io.File;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import static org.hamcrest.Matchers.everyItem;
import static org.hamcrest.Matchers.is;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
@AutoConfigureRestDocs
public class ApiControllerTest {

    @Autowired
    private MockMvc mockMvc;

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

    @DisplayName("api에서 json데이터를 잘 넘기는지 확인")
    @Test
    public void json_넘기기() throws Exception {

        mockMvc.perform(
                get("/api/")
                        .contentType(MediaType.APPLICATION_JSON)
        )
                .andExpect(status().isOk())
                .andExpect(
                        MockMvcResultMatchers.content()
                                .contentTypeCompatibleWith(MediaType.APPLICATION_JSON)
                )
                .andExpect(
                        MockMvcResultMatchers.jsonPath("$[0].Vender").value("Naver Cloud")
                )
                .andDo(MockMvcRestDocumentation.document("api"));

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

    @DisplayName("쿼리가 작동하는지 확인")
    @Test
    public void queryTest() throws Exception {

        mockMvc.perform(
                get("/api/query").param("vCPU", "4")
        )
                .andExpect(status().isOk())
                .andExpect(jsonPath("$").isArray())
                .andExpect(jsonPath("$[*].vCPU", everyItem(is(4))))
                .andDo(MockMvcRestDocumentation.document("api/query"));

    }

}
