package kr.ac.pknu.capstone.domain;

import kr.ac.pknu.capstone.domain.Data.Data;
import kr.ac.pknu.capstone.domain.Data.DataRepository;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;

import java.util.List;

@WebMvcTest(DataRepository.class)
public class DataRepositoryTest {

    @Autowired
    DataRepository dataRepository;

    @DisplayName("json을 정상적으로 읽는지, 객체 매핑이 되는지 확인")
    @Test
    public void json_읽기() throws Exception {

        List<Data> data = dataRepository.findAll();

        Assertions.assertThat(data)
                .isNotEmpty();

    }

    @DisplayName("data에서 필터링이 작동하는지 확인")
    @Test
    public void filterTest() throws Exception {

        Integer vcpu = 2, memory = 4;
        List<Data> res = dataRepository.search(vcpu, memory);

        Assertions.assertThat(res)
                .isNotEmpty()
                .allMatch(d -> d.getVcpu().equals(vcpu) && d.getMemory().equals(memory));

    }

}
