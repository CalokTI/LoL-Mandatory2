package kea.lolmandatory2.controllers;

import kea.lolmandatory2.exceptions.ResourceNotFoundException;
import kea.lolmandatory2.models.Champion;
import kea.lolmandatory2.repositories.ChampionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class Champions {

    @Autowired
    ChampionRepository champions;

    // Get
    @GetMapping("/api/champions/{championId}")
    public Champion getChampionById(@PathVariable Long championId) {
        return champions.findById(championId).orElseThrow(() -> (new ResourceNotFoundException("Match with id: " + championId + " does not exist")));
    }

    @GetMapping("api/champions")
    public List<Champion> getAllChampions() {
        return champions.findAll();
    }

    // Post
    @PostMapping("/api/champions")
    public Champion createChampion(@RequestBody Champion newChampion) {
        return champions.save(newChampion);
    }


    // Put Patch

    // Delete
}
