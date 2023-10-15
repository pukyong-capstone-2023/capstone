package kr.ac.pknu.capstone.web.dto;

import kr.ac.pknu.capstone.domain.Data.Data;
import lombok.*;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
public class UpdateRequestDto {

    private String vendor;
    private String name;
    private String io;
    private String type;
    private Integer vcpu;
    private Integer memory;
    private String currencyExchangeRates;
    private Integer costPerHour;
    private String etc;

    public Data toEntity() {
        return Data.builder()
                .vendor(vendor)
                .name(name)
                .io(io)
                .type(type)
                .vcpu(vcpu)
                .memory(memory)
                .currencyExchangeRates(currencyExchangeRates)
                .costPerHour(costPerHour)
                .etc(etc)
                .build();
    }

}
