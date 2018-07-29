using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class UltimateSlayer : Quest
{
    void Start()
    {
        Debug.Log("Ultimate slayer assigned.");
        QuestName = "Zombie Slayer";
        Description = "Kill a bunch of stuff.";
        
        ExperienceReward = 100;
        Goals = new List<Goal>
        {
            new KillGoal(this, 0, "Kill 5 Zombies", false, 0, 5),
           
            //new CollectionGoal(this, "potion_log", "Find a Log Potion", false, 0, 1)
        };

        Goals.ForEach(g => g.Init());
    }
}