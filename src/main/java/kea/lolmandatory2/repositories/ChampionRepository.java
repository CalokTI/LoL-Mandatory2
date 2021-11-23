package kea.lolmandatory2.repositories;

import kea.lolmandatory2.models.Champion;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChampionRepository extends JpaRepository<Champion, Long> {
}
