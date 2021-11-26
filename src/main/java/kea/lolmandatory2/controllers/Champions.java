package kea.lolmandatory2.controllers;

import kea.lolmandatory2.models.Champion;
import kea.lolmandatory2.repositories.ChampionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Champions {

    @Autowired
    ChampionRepository champions;

    //Get

    //Post
    @PostMapping("/api/champions")
    public Champion createChampion(@RequestBody Champion newChampion){
        return champions.save(newChampion);
    }


    //Put Patch

    //Delete
}
