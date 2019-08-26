import React from 'react';
import Divider from '../child/Divider';
import ArchetypeCard from '../child/ArchetypeCard';

import caregiverMale from '../../assets/images/archetypes/Caregiver.jpg';
import caregiverFemale from '../../assets/images/archetypes/CaregiverC.jpg';
import creatorMale from '../../assets/images/archetypes/Creator.jpg';
import creatorFemale from '../../assets/images/archetypes/CreatorC.jpg';
import explorerMale from '../../assets/images/archetypes/Explorer.jpg';
import explorerFemale from '../../assets/images/archetypes/ExplorerC.jpg';
import heroMale from '../../assets/images/archetypes/Hero.jpg';
import heroFemale from '../../assets/images/archetypes/HeroC.jpg';
import innocentMale from '../../assets/images/archetypes/Innocent.jpg';
import innocentFemale from '../../assets/images/archetypes/InnocentC.jpg';
import jesterMale from '../../assets/images/archetypes/Jester.jpg';
import jesterFemale from '../../assets/images/archetypes/JesterC.jpg';

class ArchetypePage extends React.Component {
  render() {
    return (
      <div className="ui vertical stripe quote segment">
        <Divider title="ARCHETYPE" text="Lorem ipsum genesis ipsum lorem Lorem ipsum genesis ipsum lorem Lorem ipsum genesis ipsum lorem Lorem ipsum genesis ipsum lorem"/>
          <div className="ui middle aligned stackable grid container">
            <div className="row">
              <div className="eight wide column caregiver-card">
                <ArchetypeCard
                  archetype="THE CAREGIVER"
                  description="Lorem ipsum genesis ipsum lorem Lorem ipsum genesis ipsum lorem"
                  maleImage={caregiverMale}
                  femaleImage={caregiverFemale}
                />
              </div>
              <div className="eight wide column creator-card">
                <ArchetypeCard
                  archetype="THE CREATOR"
                  description="Lorem ipsum genesis ipsum lorem Lorem ipsum genesis ipsum lorem"
                  maleImage={creatorMale}
                  femaleImage={creatorFemale}
                />
              </div>

              <div className="eight wide column explorer-card">
                <ArchetypeCard
                  archetype="THE EXPLORER"
                  description="Lorem ipsum genesis ipsum lorem Lorem ipsum genesis ipsum lorem"
                  maleImage={explorerMale}
                  femaleImage={explorerFemale}
                />
              </div>
              <div className="eight wide column hero-card">
                <ArchetypeCard
                  archetype="THE HERO"
                  description="Lorem ipsum genesis ipsum lorem Lorem ipsum genesis ipsum lorem"
                  maleImage={heroMale}
                  femaleImage={heroFemale}
                />
              </div>

              <div className="eight wide column innocent-card">
                <ArchetypeCard
                  archetype="THE INNOCENT"
                  description="Lorem ipsum genesis ipsum lorem Lorem ipsum genesis ipsum lorem"
                  maleImage={innocentMale}
                  femaleImage={innocentFemale}
                />
              </div>
              <div className="eight wide column jester-card">
                <ArchetypeCard
                  archetype="THE JESTER"
                  description="Lorem ipsum genesis ipsum lorem Lorem ipsum genesis ipsum lorem"
                  maleImage={jesterMale}
                  femaleImage={jesterFemale}
                />
              </div>

              <div className="eight wide column lover-card">
                <ArchetypeCard
                  archetype="THE INNOCENT"
                  description="Lorem ipsum genesis ipsum lorem Lorem ipsum genesis ipsum lorem"
                  maleImage={innocentMale}
                  femaleImage={innocentFemale}
                />
              </div>
              <div className="eight wide column magician-card">
                <ArchetypeCard
                  archetype="THE JESTER"
                  description="Lorem ipsum genesis ipsum lorem Lorem ipsum genesis ipsum lorem"
                  maleImage={jesterMale}
                  femaleImage={jesterFemale}
                />
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default ArchetypePage