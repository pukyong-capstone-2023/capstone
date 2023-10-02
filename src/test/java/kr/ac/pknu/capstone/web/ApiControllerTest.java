package kr.ac.pknu.capstone.web;

import com.fasterxml.jackson.databind.ObjectMapper;
import kr.ac.pknu.capstone.domain.Data.Data;
import kr.ac.pknu.capstone.domain.Data.DataRepository;
import kr.ac.pknu.capstone.web.dto.UpdateRequestDto;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.restdocs.mockmvc.MockMvcRestDocumentation;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.List;

import static org.hamcrest.Matchers.everyItem;
import static org.hamcrest.Matchers.is;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
@AutoConfigureRestDocs
public class ApiControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private DataRepository dataRepository;

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

    @DisplayName("쿼리가 작동하는지 확인")
    @Test
    public void queryTest() throws Exception {

        mockMvc.perform(get("/api/query").param("vCPU", "4"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$").isArray())
                .andExpect(jsonPath("$[*].vCPU", everyItem(is(4))))
                .andDo(MockMvcRestDocumentation.document("api/query"));

    }

    @DisplayName("update 작동 확인")
    @Test
    public void updateTest() throws Exception {

        UpdateRequestDto updateRequestDto = new UpdateRequestDto(
                "vendor",
                "name",
                "io",
                "type",
                1,
                1,
                "rate",
                1,
                "etc"
        );

        mockMvc.perform(
                post("/api/update")
                        .content(objectMapper.writeValueAsString(updateRequestDto))
                        .contentType(MediaType.APPLICATION_JSON)
                )
                .andExpect(status().isOk());

        List<Data> all = dataRepository.findAll();
        Assertions.assertThat(all).isNotEmpty();
        Assertions.assertThat(all.get(0).getVendor()).isEqualTo("vendor");

    }

}
