package kr.ac.pknu.capstone.domain;

import kr.ac.pknu.capstone.domain.Data.Data;
import kr.ac.pknu.capstone.domain.Data.DataRepository;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class DataRepositoryTest {

    @Autowired
    DataRepository dataRepository;

    @AfterEach
    public void clean() {
        dataRepository.deleteAll();
    }

    @DisplayName("엔티티 저장이 잘 되는지, h2도 잘 작동하는지 확인")
    @Test
    public void repositoryTest() {

        Data data = Data.builder()
                .Vendor("vendor")
                .Name("instance")
                .IO("io")
                .Type("type")
                .vCPU(1)
                .Memory(1)
                .CurrencyExchangeRates("rate")
                .CostPerHour(1)
                .Etc("etc")
                .build();
        dataRepository.save(data);

        List<Data> res = dataRepository.findAll();

        assertThat(res).isNotEmpty();
        assertThat(res.get(0).getVendor()).isEqualTo("vendor");

    }

}
