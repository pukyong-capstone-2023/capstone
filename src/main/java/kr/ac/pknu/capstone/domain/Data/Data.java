package kr.ac.pknu.capstone.domain.Data;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
public class Data {

    @JsonProperty("Vender")
    private String vendor;

    @JsonProperty("Name")
    private String name;

    @JsonProperty("I/O")
    private String io;

    @JsonProperty("Type")
    private String type;

    @JsonProperty("vCPU")
    private Integer vCPU;

    @JsonProperty("Memory(GiB)")
    private Integer memory;

    @JsonProperty("Currency exchange rates")
    private String currencyExchangeRates;

    @JsonProperty("Cost per hour")
    private Integer costPerHour;

    @JsonProperty("etc")
    private String etc;

}
