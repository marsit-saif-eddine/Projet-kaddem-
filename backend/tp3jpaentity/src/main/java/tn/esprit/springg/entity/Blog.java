package tn.esprit.springg.entity;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
@Table( name ="Blog")
public class Blog {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO )
    private Long idBlog ;

    private  String titre ;
    private String description ;
    private String image ;
}
