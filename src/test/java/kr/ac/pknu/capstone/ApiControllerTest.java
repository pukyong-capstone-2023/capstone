package kr.ac.pknu.capstone;

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

        mockMvc.perform(
                get("/api/query").param("vCPU", "4")
        )
                .andExpect(status().isOk())
                .andExpect(jsonPath("$").isArray())
                .andExpect(jsonPath("$[*].vCPU", everyItem(is(4))))
                .andDo(MockMvcRestDocumentation.document("api/query"));

    }

}
