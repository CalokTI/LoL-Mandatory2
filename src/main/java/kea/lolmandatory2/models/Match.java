package kea.lolmandatory2.models;

import lombok.Data;

import javax.persistence.*;
import java.util.Set;

@Table(name="matches")
@Entity
@Data
public class Match {

    @Id
    private String id;

    @ManyToMany
    @JoinTable(
            name = "match_summoners",
            joinColumns = @JoinColumn(name = "match_id"),
            inverseJoinColumns = @JoinColumn(name = "summoner_id")
    )
    private Set<Summoner> summoners;
}
