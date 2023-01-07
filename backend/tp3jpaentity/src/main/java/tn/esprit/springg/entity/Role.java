package tn.esprit.springg.entity;


import lombok.*;
import javax.persistence.*;


@NoArgsConstructor
@Getter
@Setter
@Entity
public class Role {

    @Id
    private String roleName;
    private String roleDescription;

}
