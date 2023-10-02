package kr.ac.pknu.capstone.domain;

import kr.ac.pknu.capstone.domain.Data.Data;
import kr.ac.pknu.capstone.domain.Data.DataRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class DataRepositoryTest {

    private final DataRepository dataRepository;

    @Autowired
    public DataRepositoryTest(DataRepository dataRepository) {
        this.dataRepository = dataRepository;
    }

    @AfterEach
    public void clean() {
        dataRepository.deleteAll();
    }

    @DisplayName("엔티티 저장이 잘 되는지, h2도 잘 작동하는지 확인")
    @Test
    public void repositoryTest() {

        Data data = Data.builder()
                .vendor("vendor")
                .name("instance")
                .io("io")
                .type("type")
                .vCPU(1)
                .memory(1)
                .currencyExchangeRates("rate")
                .costPerHour(1)
                .etc("etc")
                .build();
        dataRepository.save(data);

        List<Data> res = dataRepository.findAll();

        assertThat(res).isNotEmpty();
        assertThat(res.get(0).getVendor()).isEqualTo("vendor");

    }

}
