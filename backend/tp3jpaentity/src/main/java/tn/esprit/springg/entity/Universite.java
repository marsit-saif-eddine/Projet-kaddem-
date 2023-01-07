package tn.esprit.springg.entity;
import javax.persistence.*;
import java.io.Serializable;
import java.util.List;
import javax.persistence.*;
import lombok.*;


@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name="Universite")
public class Universite implements Serializable {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long idUniv;
    private String nomUniv;
    @OneToMany
    private List<Departement> dep;
}
