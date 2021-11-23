package kea.lolmandatory2.models;

import lombok.Data;

import javax.persistence.*;
import java.util.Set;

@Table(name="summoners")
@Entity
@Data
public class Summoner {

    @Id
    @Column(length=63)
    private String id;

    @Column(length=56)
    private String accountId;

    @Column(length=78)
    private String puuid;

    @Column
    private String name;

    @Column
    private int profileIconId;

    @Column
    private long summonerLevel;

    @Column
    private long friendly;

    @Column
    private long salty;

    @ManyToMany(mappedBy = "summoners")
    private Set<Match> matches;
}

/*
    Example data from lol api:
    {
        "id": "bK8AVGT2KnA0Aed6QlI3kry_OWAwVK0-_ymz40C5VUTsdPY",
        "accountId": "E5CfFM13PWJ26GiV_lnNM4Z880F6D3qsNSb0GEBdZHGdxg",
        "puuid": "wgmXFxhKv5qNMyeQj8vruydmBX89ivNhSTtm1x8mYmi5l7RA3u3fZQkzwGNRSdzVomtesvu8NdCC2Q",
        "name": "Doublelift",
        "profileIconId": 4568,
        "revisionDate": 1637460079000,
        "summonerLevel": 278
    }


accountId   	string	Encrypted account ID. Max length 56 characters.
profileIconId	int	    ID of the summoner icon associated with the summoner.
revisionDate	long	Date summoner was last modified specified as epoch milliseconds. The following events will update this timestamp: summoner name change, summoner level change, or profile icon change.
name	        string	Summoner name.
id	            string	Encrypted summoner ID. Max length 63 characters.
puuid	        string	Encrypted PUUID. Exact length of 78 characters.
summonerLevel	long	Summoner level associated with the summoner.

    skipped revisionDate
 */
