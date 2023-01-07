package tn.esprit.springg.entity;
import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.List;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;


@NoArgsConstructor
@Getter
@Setter
@Entity
@Table( name ="Etudiant")
public class Etudiant implements Serializable {
    @Id
    private String idEtudiant ;


    @Column
    @Enumerated(EnumType.STRING)
    private Option opt;

    @Temporal(value=TemporalType.DATE)
    private Date d;


    private String prenomE;
    private String nomE;
@JsonIgnore
    @OneToMany(mappedBy = "etud")
    private List<Contrat> cont;
    @JsonIgnore
    @ManyToMany(mappedBy = "etud",fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private List<Equipe> equip;
    @ManyToOne
    private Departement dep;

    private String userPassword;
    @JsonIgnore
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "etudiant")
    private List<Reclamation> reclamations;

}