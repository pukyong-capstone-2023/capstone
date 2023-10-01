package kr.ac.pknu.capstone.domain.Data;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Entity
public class Data {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonProperty("Vender")
    private String Vendor;

    @JsonProperty("Name")
    private String Name;

    @JsonProperty("I/O")
    private String IO;

    @JsonProperty("Type")
    private String Type;

    @JsonProperty("vCPU")
    private Integer vCPU;

    @JsonProperty("Memory(GiB)")
    private Integer Memory;

    @JsonProperty("Currency exchange rates")
    private String CurrencyExchangeRates;

    @JsonProperty("Cost per hour")
    private Integer CostPerHour;

    @JsonProperty("etc")
    private String Etc;

}
