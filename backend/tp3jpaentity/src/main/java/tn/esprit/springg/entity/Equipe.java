package tn.esprit.springg.entity;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;
import org.springframework.context.annotation.EnableMBeanExport;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="Equipe")
public class Equipe implements Serializable {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long idEquipe;
    private String nomEquipe;
    @Enumerated(EnumType.STRING)
    private Niveau niveau ;
    @OneToOne(cascade = CascadeType.ALL,mappedBy = "equipe",fetch = FetchType.EAGER)
    @JsonIgnoreProperties(value={"equipe"})
    private DetailsEquipe details;

    @ManyToMany
    private List<Etudiant> etud;

}
