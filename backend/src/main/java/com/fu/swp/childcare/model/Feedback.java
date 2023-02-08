package com.fu.swp.childcare.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "feedbacks")
public class Feedback {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String customerName;

    @Column(nullable = false)
    private LocalDateTime date;

    @Column(nullable = false)
    private Integer rating;

    @Column(nullable = false)
    private String reviewText;

    @ManyToOne
    @JoinColumn(name = "booking_id")
    private Booking booking;


}
