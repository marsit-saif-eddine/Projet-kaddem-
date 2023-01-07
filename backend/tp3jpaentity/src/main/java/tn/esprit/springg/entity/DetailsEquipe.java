package tn.esprit.springg.entity;

import javax.persistence.*;
import java.io.Serializable;

import lombok.*;



@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="DetailsEquipe")
public class DetailsEquipe implements Serializable {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long idDetailEquipe;
    private int salle;
    private String thematique;
    @OneToOne(fetch = FetchType.EAGER)
    private Equipe equipe;
  }
