package tn.esprit.springg.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.awt.*;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity
@Table( name ="Reclamation")
public class Reclamation {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long idReclamation ;
    private String objet;
    private String description;
    @JsonIgnore
    @ManyToOne()
    private Etudiant etudiant;
}
