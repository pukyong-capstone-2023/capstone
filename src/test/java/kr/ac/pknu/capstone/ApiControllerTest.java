package kr.ac.pknu.capstone;

import com.fasterxml.jackson.databind.ObjectMapper;
import kr.ac.pknu.capstone.web.dto.UpdateRequestDto;
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
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;

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

        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        params.add("vCPU", "4");

        mockMvc.perform(
                get("/api/query").params(params)
        )
                .andExpect(status().isOk())
                .andExpect(jsonPath("$").isArray())
                .andExpect(jsonPath("$[*].vCPU", everyItem(is(4))))
                .andDo(MockMvcRestDocumentation.document("api/query"));

    }

    @DisplayName("쿼리에 음수를 넣어서 확인")
    @Test
    public void queryTest2() throws Exception {

        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        params.add("vCPU", "-1");

        mockMvc.perform(
                        get("/api/query").params(params)
                )
                .andExpect(status().isOk())
                .andExpect(jsonPath("$").isArray())
                .andExpect(jsonPath("$").isEmpty());

    }

    @DisplayName("쿼리에 문자열 입력 시 오류를 뿜는지 확인")
    @Test
    public void queryTest3() throws Exception {

        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        params.add("vCPU", "test");

        mockMvc.perform(
                        get("/api/query").params(params)
                )
                .andExpect(status().isBadRequest());
    }

}
