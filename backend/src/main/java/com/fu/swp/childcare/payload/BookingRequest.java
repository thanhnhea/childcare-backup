package com.fu.swp.childcare.payload;

import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BookingRequest {
    @NotNull
    String id;
    @NotNull
    String childId;
    @NotNull
    Boolean isPaid;
}
