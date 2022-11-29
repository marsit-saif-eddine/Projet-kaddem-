package tn.esprit.springg.entity;
import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.List;
import javax.persistence.*;
import lombok.*;


@NoArgsConstructor
@Getter
@Setter
@Entity
@Table( name ="Etudiant")
public class Etudiant implements Serializable {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long idEtudiant ;


    @Column
    @Enumerated(EnumType.STRING)
    private Option opt;

    @Temporal(value=TemporalType.DATE)
    private Date d;


    private String prenomE;
    private String nomE;
    @OneToMany(mappedBy = "etud")
    private List<Contrat> cont;
    @ManyToMany(mappedBy = "etud")
    private List<Equipe> equip;
    @ManyToOne
    private Departement dep;


}