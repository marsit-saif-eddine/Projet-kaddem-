package tn.esprit.springg.entity;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import lombok.*;


@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name="Contrat")
public class Contrat implements Serializable {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long idContrat;
    @Temporal(value=TemporalType.DATE)
    private Date dateDebutContrat;
    @Temporal(value=TemporalType.DATE)
    private Date dateFinContrat;
    @Enumerated(EnumType.STRING)
    private Specialite spec;
    private Boolean archive;
    private int montantContrat;
   @ManyToOne
    Etudiant etud;


    }
