# Copy this text into your `.bash` homework file. Copy and paste the code you successfully used into terminal below each prompt

# Open the **Terminal app**

# Create a new directory on your desktop called `galaxy_far_far_away`and enter it
PSCBUS-105:Desktop pscbus_105$ mkdir galaxy_far_far_away
PSCBUS-105:Desktop pscbus_105$ cd galaxy_far_far_away/
# Create a directory called `death_star`
PSCBUS-105:Desktop pscbus_105$ mkdir death_star
PSCBUS-105:Desktop pscbus_105$ cd death_star
# and make the following files inside of it:
# darth_vader.txt
# princess_leia.txt
# storm_trooper.txt
PSCBUS-105:death_star pscbus_105$ touch darth_vader.txt
PSCBUS-105:death_star pscbus_105$ touch princess_leia.txt
PSCBUS-105:death_star pscbus_105$ touch storm_trooper.txt

# In `galaxy_far_far_away`, make a directory named `tatooine`
PSCBUS-105:Desktop pscbus_105$ cd galaxy_far_far_away/
PSCBUS-105:galaxy_far_far_away pscbus_105$ cd tatooine
# and create the following files in it:
# luke.txt
# ben_kenobi.txt
PSCBUS-105:tatooine pscbus_105$ touch luke.txt
PSCBUS-105:tatooine pscbus_105$ touch ben_kenobi.txt

# Inside of `tatooine` make a directory called `millenium_falcon`
PSCBUS-105:tatooine pscbus_105$ cd millenium_falcon
# and in it create:
# han_solo.txt
# chewbaca.txt
SCBUS-105:millenium_falcon pscbus_105$ touch han_solo.txt
PSCBUS-105:millenium_falcon pscbus_105$ touch chewbaca.txt

# Rename `ben_kenobi.txt` to `obi_wan.txt
PSCBUS-105:tatooine pscbus_105$ mv ben_kenobi.txt obi.wan.txt

# Copy `storm_trooper.txt` from `death_star` to `tatooine`
PSCBUS-105:death_star pscbus_105$ cp storm_trooper.txt tatooine

# Move `luke.txt` and `obi_wan.txt` to the `millenium_falcon`
PSCBUS-105:tatooine pscbus_105$ mv luke.txt millenium_falcon

# Move `millenium_falcon` out of `tatooine` and into `galaxy_far_far_away`
PSCBUS-105:tatooine pscbus_105$ mv millenium_falcon galaxy_far_far_away
# Move `millenium_falcon` into `death_star`
PSCBUS-105:galaxy_far_far_away pscbus_105 mv millenium_falcon death_star
# Move `princess_leia.txt` into the `millenium_falcon`
PSCBUS-105:death_star pscbus_105 mv princess_leia millenium_falcon
PSCBUS-105:tatooine pscbus_105$ rm obi.wan.txt
# In `galaxy_far_far_away`, make a directory called `yavin_4`
PSCBUS-105:galaxy_far_far_away pscbus_105 mkdir yavin_4
# Move the `millenium_falcon` out of the `death_star` and into `yavin_4`
PSCBUS-105:death_star pscbus_105 mv millenium_falcon yavin_4
# Make a directory in `yavin_4` called `x_wing`
PSCBUS-105:yavin_4 pscbus_105$ mkdir x_wing
# Move `princess_leia.txt` to `yavin_4` and `luke.txt` to `x_wing`
PSCBUS-105:death_star pscbus_105$ mv princess_leia.txt yavin_4
PSCBUS-105:yavin_4 pscbus_105$ mv luke.txt x_wing
# Move the `millenium_falcon` and `x_wing` out of `yavin_4` and into `galaxy_far_far_away`
PSCBUS-105:yavin_4 pscbus_105$ mv millenium_falcon x_wing galaxy_far_far_away
# In `death_star`, create directories for `tie_fighter_1`, `tie_fighter_2` and `tie_fighter_3`
PSCBUS-105:Desktop pscbus_105$ cd death_star
PSCBUS-105:death_star pscbus_105$ mkdir tie_fighter_1
PSCBUS-105:death_star pscbus_105$ mkdir tie_fighter_2
PSCBUS-105:death_star pscbus_105$ mkdir tie_fighter_3
# Move `darth_vader.txt` into `tie_fighter_1`
PSCBUS-105:death_star pscbus_105$ mv darth_vader tie_fighter_1
# Make a copy of `storm_trooper.txt` in both `tie_fighter_2` and `tie_fighter_3`
PSCBUS-105:death_star pscbus_105$ cp storm_trooper.txt tie_fighter_2
PSCBUS-105:death_star pscbus_105$ cp storm_troope.txt tie_fighter_3
# Move all of the `tie_fighters` out of the `death_star` and into `galaxy_far_far_away`
PSCBUS-105:death_star pscbus_105$ mv tie_fighter_1 galaxy_far_far_away
PSCBUS-105:death_star pscbus_105$ mv tie_fighter_2 galaxy_far_far_away
PSCBUS-105:death_star pscbus_105$ mv tie_fighter_3 galaxy_far_far_away
# Be careful with this command - cannot undo!

# Make sure you delete the right thing, or you could accidentally delete the contents of your computer (it has happened).

# This command will typically not ask you if you really want to delete. It will just delete so doublecheck you are deleting exactly what you mean to delete

# Remove `tie_fighters` 2 and 3.
PSCBUS-105:galaxy_far_far_away pscbus_105 rm-r tie_fighter_2
PSCBUS-105:galaxy_far_far_away pscbus_105 rm-r tie_fighter_3


# Touch a file in "**x_wing**" called "**the_force.txt**".
PSCBUS-105:x_wing pscbus_105 touch the_force.txt

# Destroy the "**death_star**" and anyone inside of it.
PSCBUS-105:Desktop pscbus_105$ rm-r death_star

# Return "**x_wing**" and the "**millenium_falcon**" to "**yavin_4**".
PSCBUS-105:galaxy_far_far_away pscbus_105 mv x_wing millenium_falcon yavin_4
# Celebrate! */