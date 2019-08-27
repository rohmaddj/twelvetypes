import React from 'react';
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

import ProgressiveImage from 'react-progressive-image';
import placeholder from '../../assets/images/CaregiverPlaceholder.jpg';

const ImageSlider = () => {
  return (
    <div className="ui inverted vertical masthead center aligned segment linear-background">
      <div className="ui text container">
        {/* <h1 className="ui inverted header">
          Imagine-a-Company
        </h1>
        <h2>Do whatever you want when you want to.</h2>
        <div className="ui huge primary button">Get Started <i className="right arrow icon"></i></div> */}

        <div className="scene">
          <div className="carousel">
            <div className="carousel__cell">
              <ProgressiveImage
                src={caregiverMale}
                placeholder={ placeholder }
              >
              {(src, loading) => (
                <img
                  style={{ opacity: loading ? 0.3 : 1 }}
                  src={src}
                  alt="Male Archetype"
                  className="carousel-img"
                />
              )}
              </ProgressiveImage>
            </div>
            <div className="carousel__cell">
              <ProgressiveImage
                  src={caregiverFemale}
                  placeholder={ placeholder }
              >
              {(src, loading) => (
                <img
                  style={{ opacity: loading ? 0.3 : 1 }}
                  src={src}
                  alt="Male Archetype"
                  className="carousel-img"
                />
              )}
              </ProgressiveImage>
            </div>
            <div className="carousel__cell">
              <ProgressiveImage
                src={creatorMale}
                placeholder={ placeholder }
              >
              {(src, loading) => (
                <img
                  style={{ opacity: loading ? 0.3 : 1 }}
                  src={src}
                  alt="Male Archetype"
                  className="carousel-img"
                />
              )}
              </ProgressiveImage>
            </div>
            <div className="carousel__cell">
              <ProgressiveImage
                src={creatorFemale}
                placeholder={ placeholder }
              >
              {(src, loading) => (
                <img
                  style={{ opacity: loading ? 0.3 : 1 }}
                  src={src}
                  alt="Male Archetype"
                  className="carousel-img"
                />
              )}
              </ProgressiveImage>
            </div>
            <div className="carousel__cell">
              <ProgressiveImage
                src={creatorFemale}
                placeholder={ placeholder }
              >
              {(src, loading) => (
                <img
                  style={{ opacity: loading ? 0.3 : 1 }}
                  src={src}
                  alt="Male Archetype"
                  className="carousel-img"
                />
              )}
              </ProgressiveImage>
            </div>
            <div className="carousel__cell">
              <ProgressiveImage
                  src={jesterFemale}
                  placeholder={ placeholder }
              >
              {(src, loading) => (
                <img
                  style={{ opacity: loading ? 0.3 : 1 }}
                  src={src}
                  alt="Male Archetype"
                  className="carousel-img"
                />
              )}
              </ProgressiveImage>
            </div>
            <div className="carousel__cell">
              <ProgressiveImage
                  src={jesterMale}
                  placeholder={ placeholder }
              >
              {(src, loading) => (
                <img
                  style={{ opacity: loading ? 0.3 : 1 }}
                  src={src}
                  alt="Male Archetype"
                  className="carousel-img"
                />
              )}
              </ProgressiveImage>
            </div>
            <div className="carousel__cell">
              <ProgressiveImage
                  src={heroFemale}
                  placeholder={ placeholder }
              >
              {(src, loading) => (
                <img
                  style={{ opacity: loading ? 0.3 : 1 }}
                  src={src}
                  alt="Male Archetype"
                  className="carousel-img"
                />
              )}
              </ProgressiveImage>
            </div>
            <div className="carousel__cell">
              <ProgressiveImage
                  src={rulerMale}
                  placeholder={ placeholder }
              >
              {(src, loading) => (
                <img
                  style={{ opacity: loading ? 0.3 : 1 }}
                  src={src}
                  alt="Male Archetype"
                  className="carousel-img"
                />
              )}
              </ProgressiveImage>
            </div>
            <div className="carousel__cell">
              <ProgressiveImage
                  src={loverFemale}
                  placeholder={ placeholder }
              >
              {(src, loading) => (
                <img
                  style={{ opacity: loading ? 0.3 : 1 }}
                  src={src}
                  alt="Male Archetype"
                  className="carousel-img"
                />
              )}
              </ProgressiveImage>
            </div>
            <div className="carousel__cell">
              <ProgressiveImage
                src={creatorFemale}
                placeholder={ placeholder }
              >
              {(src, loading) => (
                <img
                  style={{ opacity: loading ? 0.3 : 1 }}
                  src={src}
                  alt="Male Archetype"
                  className="carousel-img"
                />
              )}
              </ProgressiveImage>
            </div>
            <div className="carousel__cell">
              <ProgressiveImage
                src={creatorFemale}
                placeholder={ placeholder }
              >
              {(src, loading) => (
                <img
                  style={{ opacity: loading ? 0.3 : 1 }}
                  src={src}
                  alt="Male Archetype"
                  className="carousel-img"
                />
              )}
              </ProgressiveImage>
            </div>
            <div className="carousel__cell">
              <ProgressiveImage
                src={creatorFemale}
                placeholder={ placeholder }
              >
              {(src, loading) => (
                <img
                  style={{ opacity: loading ? 0.3 : 1 }}
                  src={src}
                  alt="Male Archetype"
                  className="carousel-img"
                />
              )}
              </ProgressiveImage>
            </div>
            <div className="carousel__cell">
              <ProgressiveImage
                src={creatorFemale}
                placeholder={ placeholder }
              >
              {(src, loading) => (
                <img
                  style={{ opacity: loading ? 0.3 : 1 }}
                  src={src}
                  alt="Male Archetype"
                  className="carousel-img"
                />
              )}
              </ProgressiveImage>
            </div>
            <div className="carousel__cell">
              <ProgressiveImage
                src={creatorFemale}
                placeholder={ placeholder }
              >
              {(src, loading) => (
                <img
                  style={{ opacity: loading ? 0.3 : 1 }}
                  src={src}
                  alt="Male Archetype"
                  className="carousel-img"
                />
              )}
              </ProgressiveImage>
            </div>
          </div>
        </div>

        <div className="carousel-options">
          {/* <p>
            <label>
              Cells
              <input className="cells-range" type="range" min="3" max="15" value="9" />
            </label>
          </p> */}
          <p>
            <button className="previous-button">Previous</button>
            <button className="next-button">Next</button>
          </p>
          {/* <p>
            Orientation:
            <label>
              <input type="radio" name="orientation" value="horizontal" checked />
              horizontal
            </label>
            <label>
              <input type="radio" name="orientation" value="vertical" />
              vertical
            </label>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;