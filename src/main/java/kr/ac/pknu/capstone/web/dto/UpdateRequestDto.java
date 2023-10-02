package kr.ac.pknu.capstone.web.dto;

import kr.ac.pknu.capstone.domain.Data.Data;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UpdateRequestDto {

    String vendor;
    String name;
    String io;
    String type;
    Integer vCPU;
    Integer memory;
    String currencyExchangeRates;
    Integer costPerHour;
    String etc;

    public Data toEntity() {
        return Data.builder()
                .vendor(vendor)
                .name(name)
                .io(io)
                .type(type)
                .vCPU(vCPU)
                .memory(memory)
                .currencyExchangeRates(currencyExchangeRates)
                .costPerHour(costPerHour)
                .etc(etc)
                .build();
    }

}
