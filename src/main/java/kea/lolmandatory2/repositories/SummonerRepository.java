package kea.lolmandatory2.repositories;

import kea.lolmandatory2.models.Summoner;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SummonerRepository extends JpaRepository<Summoner, String> {

    Summoner findByNameIgnoreCase(String name);

}
