import React from 'react';
import Divider from './Divider';
import ArchetypeCard from './ArchetypeCard';

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
import loverMale from '../../assets/images/archetypes/Lover.jpg';
import loverFemale from '../../assets/images/archetypes/LoverC.jpg';
import magicianMale from '../../assets/images/archetypes/Magician.jpg';
import magicianFemale from '../../assets/images/archetypes/MagicianC.jpg';
import memberMale from '../../assets/images/archetypes/Member.jpg';
import memberFemale from '../../assets/images/archetypes/MemberC.jpg';
import outlawMale from '../../assets/images/archetypes/Outlaw.jpg';
import outlawFemale from '../../assets/images/archetypes/OutlawC.jpg';
import rulerMale from '../../assets/images/archetypes/Ruler.jpg';
import rulerFemale from '../../assets/images/archetypes/RulerC.jpg';
import sageMale from '../../assets/images/archetypes/Sage.jpg';
import sageFemale from '../../assets/images/archetypes/SageC.jpg';

class ArchetypeList extends React.Component {
  render() {
    return (
      <div>
        <Divider title="ARCHETYPE" text="Lorem ipsum genesis ipsum lorem Lorem ipsum genesis ipsum lorem Lorem ipsum genesis ipsum lorem Lorem ipsum genesis ipsum lorem"/>
          <div className="ui middle aligned stackable grid container">
            <div className="row">
              <div className="eight wide column caregiver-card">
                <ArchetypeCard
                  archetype="THE CAREGIVER"
                  description="Lorem ipsum genesis ipsum lorem Lorem ipsum genesis ipsum lorem"
                  maleImage={caregiverMale}
                  femaleImage={caregiverFemale}
                  onImageClick={ this.props.onImageClick }
                />
              </div>
              <div className="eight wide column creator-card">
                <ArchetypeCard
                  archetype="THE CREATOR"
                  description="Lorem ipsum genesis ipsum lorem Lorem ipsum genesis ipsum lorem"
                  maleImage={creatorMale}
                  femaleImage={creatorFemale}
                  onImageClick={ this.props.onImageClick }
                />
              </div>

              <div className="eight wide column explorer-card">
                <ArchetypeCard
                  archetype="THE EXPLORER"
                  description="Lorem ipsum genesis ipsum lorem Lorem ipsum genesis ipsum lorem"
                  maleImage={explorerMale}
                  femaleImage={explorerFemale}
                  onImageClick={ this.props.onImageClick }
                />
              </div>
              <div className="eight wide column hero-card">
                <ArchetypeCard
                  archetype="THE HERO"
                  description="Lorem ipsum genesis ipsum lorem Lorem ipsum genesis ipsum lorem"
                  maleImage={heroMale}
                  femaleImage={heroFemale}
                  onImageClick={ this.props.onImageClick }
                />
              </div>

              <div className="eight wide column innocent-card">
                <ArchetypeCard
                  archetype="THE INNOCENT"
                  description="Lorem ipsum genesis ipsum lorem Lorem ipsum genesis ipsum lorem"
                  maleImage={innocentMale}
                  femaleImage={innocentFemale}
                  onImageClick={ this.props.onImageClick }
                />
              </div>
              <div className="eight wide column jester-card">
                <ArchetypeCard
                  archetype="THE JESTER"
                  description="Lorem ipsum genesis ipsum lorem Lorem ipsum genesis ipsum lorem"
                  maleImage={jesterMale}
                  femaleImage={jesterFemale}
                  onImageClick={ this.props.onImageClick }
                />
              </div>

              <div className="eight wide column lover-card">
                <ArchetypeCard
                  archetype="THE LOVER"
                  description="Lorem ipsum genesis ipsum lorem Lorem ipsum genesis ipsum lorem"
                  maleImage={loverMale}
                  femaleImage={loverFemale}
                  onImageClick={ this.props.onImageClick }
                />
              </div>
              <div className="eight wide column magician-card">
                <ArchetypeCard
                  archetype="THE MAGICIAN"
                  description="Lorem ipsum genesis ipsum lorem Lorem ipsum genesis ipsum lorem"
                  maleImage={magicianMale}
                  femaleImage={magicianFemale}
                  onImageClick={ this.props.onImageClick }
                />
              </div>

              <div className="eight wide column member-card">
                <ArchetypeCard
                  archetype="THE MEMBER"
                  description="Lorem ipsum genesis ipsum lorem Lorem ipsum genesis ipsum lorem"
                  maleImage={memberMale}
                  femaleImage={memberFemale}
                  onImageClick={ this.props.onImageClick }
                />
              </div>
              <div className="eight wide column outlaw-card">
                <ArchetypeCard
                  archetype="THE OUTLAW"
                  description="Lorem ipsum genesis ipsum lorem Lorem ipsum genesis ipsum lorem"
                  maleImage={outlawMale}
                  femaleImage={outlawFemale}
                  onImageClick={ this.props.onImageClick }
                />
              </div>

              <div className="eight wide column ruler-card">
                <ArchetypeCard
                  archetype="THE RULER"
                  description="Lorem ipsum genesis ipsum lorem Lorem ipsum genesis ipsum lorem"
                  maleImage={rulerMale}
                  femaleImage={rulerFemale}
                  onImageClick={ this.props.onImageClick }
                />
              </div>
              <div className="eight wide column sage-card">
                <ArchetypeCard
                  archetype="THE SAGE"
                  description="Lorem ipsum genesis ipsum lorem Lorem ipsum genesis ipsum lorem"
                  maleImage={sageMale}
                  femaleImage={sageFemale}
                  onImageClick={ this.props.onImageClick }
                />
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default ArchetypeList