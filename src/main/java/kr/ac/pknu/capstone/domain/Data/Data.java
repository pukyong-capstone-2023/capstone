package kr.ac.pknu.capstone.domain.Data;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public class Data {

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
