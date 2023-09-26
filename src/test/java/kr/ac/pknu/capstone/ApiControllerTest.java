package kr.ac.pknu.capstone;

import com.fasterxml.jackson.databind.ObjectMapper;
import kr.ac.pknu.capstone.domain.Data.Data;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.io.File;

@SpringBootTest
@AutoConfigureMockMvc
public class ApiControllerTest {

    @Autowired
    private MockMvc mockMvc;

    // json을 정상적으로 읽는지, 객체 매핑이 되는지 확인
    @Test
    public void json_읽기() throws Exception {

        ObjectMapper objectMapper = new ObjectMapper();

        ClassPathResource resource = new ClassPathResource("data.json");
        File file = resource.getFile();
        Data[] datas = objectMapper.readValue(file, Data[].class);

        Assertions.assertThat(datas)
                .isNotEmpty();

    }

    // api에서 json데이터를 잘 넘기는지 확인
    @Test
    public void json_넘기기() throws Exception {

        mockMvc.perform(
                MockMvcRequestBuilders.get("/api/")
                        .contentType(MediaType.APPLICATION_JSON)
        )
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(
                        MockMvcResultMatchers.content()
                                .contentTypeCompatibleWith(MediaType.APPLICATION_JSON)
                )
                .andExpect(
                        MockMvcResultMatchers.jsonPath("$[0].Vender").value("Naver Cloud")
                );

    }

}
