package tn.esprit.springg.entity;

import javax.persistence.*;
import java.io.Serializable;

import lombok.*;


@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name="Details_Equipe")
public class DetailsEquipe implements Serializable {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long idDetailEquipe;
    private int salle;
    private String thematique;
    @OneToOne(mappedBy = "details")
    private Equipe equipe;
  }
