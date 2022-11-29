package tn.esprit.springg.entity;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

import lombok.*;


@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name="Equipe")
public class Equipe implements Serializable {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long idEquipe;
    private String nomEquipe;
    @Enumerated(EnumType.STRING)
    private Niveau niv ;
    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private DetailsEquipe details;
    @ManyToMany
    private List<Etudiant> etud;

}
