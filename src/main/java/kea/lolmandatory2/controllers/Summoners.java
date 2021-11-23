package kea.lolmandatory2.controllers;

import kea.lolmandatory2.models.Summoner;
import kea.lolmandatory2.repositories.SummonerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Summoners {

    @Autowired
    SummonerRepository summoners;

    @PostMapping("/api/summoners")
    public Summoner addSummoner(@RequestBody Summoner newSummoner){
        return summoners.save(newSummoner);
    }
}
