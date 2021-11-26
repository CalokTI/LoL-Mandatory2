package kea.lolmandatory2.repositories;

import kea.lolmandatory2.models.Summoner;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface SummonerRepository extends JpaRepository<Summoner, String> {


    Summoner findByNameIgnoreCase(String name);

    @Query(value = "UPDATE summoners SET summoners.friendly = summoners.friendly +1 WHERE summoners.name = ?", nativeQuery = true)
    Summoner updateFriendlyByName(String name);

    @Query(value = "UPDATE summoners SET summoners.salty = summoners.salty +1 WHERE summoners.name = ?", nativeQuery = true)
    Summoner updateSaltyByName(String name);

}
