package kea.lolmandatory2.models;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name="champions")
@Entity
@Data
public class Champion {

    @Id
    private long id;

    @Column
    private String name;

    @Column
    private String title;

    @Column
    private String image;

    @Column
    private String tagOne;

    @Column
    private String tagTwo;
}
