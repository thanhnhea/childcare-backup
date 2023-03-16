package com.fu.swp.childcare.model;

import com.fu.swp.childcare.controller.mapping.BlogDTO;
import lombok.Getter;
import lombok.Setter;
import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Getter
@Setter
@Table(name = "blogs")
public class Blog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String author;

    @Column(nullable = false)
    private LocalDate datePublished;

    @Column(nullable = false, columnDefinition = "text")
    private String bodyText;

    @ManyToOne
    @JoinColumn(name = "user_id")
    User user;

    @ManyToOne
    @JoinColumn(name = "category_id")
    Category category;

    @Override
    public String toString() {
        return "Blog{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", author='" + author + '\'' +
                ", datePublished=" + datePublished +
                ", bodyText='" + bodyText + '\'' +
                ", user=" + user +
                ", category=" + category +
                '}';
    }

    public BlogDTO toBlogDTO(){
        return new BlogDTO(this.id.toString(),this.title,this.datePublished, this.author,this.bodyText);
    }
}
