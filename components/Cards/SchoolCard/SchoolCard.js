import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Card from 'components/Cards/Card/Card';
import FrontSchoolCard from './FrontSchoolCard';
import BackSchoolCard from './BackSchoolCard';
import styles from './SchoolCard.css';

class SchoolCard extends Component {
  static propTypes = {
    hasHardwareIncluded: PropTypes.bool.isRequired,
    hasHousing: PropTypes.bool,
    hasOnline: PropTypes.bool.isRequired,
    hasOnlyOnline: PropTypes.bool.isRequired,
    isFullTime: PropTypes.bool.isRequired,
    locations: PropTypes.arrayOf(
      PropTypes.shape({
        city: PropTypes.string,
        va_accepted: PropTypes.bool.isRequired,
        state: PropTypes.string,
      }),
    ).isRequired,
    logoSource: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
  };

  static defaultProps = {
    hasHousing: false,
  };

  state = {
    isFrontOfCardShowing: true,
  };

  showBackOfCard = () => this.setState({ isFrontOfCardShowing: false });

  showFrontOfCard = () => this.setState({ isFrontOfCardShowing: true });

  render() {
    const { props, state } = this;

    return (
      <Card
        className={classNames(styles.SchoolCard, {
          [styles.backCard]: !state.isFrontOfCardShowing,
        })}
        hasAnimationOnHover={false}
      >
        {state.isFrontOfCardShowing ? (
          <FrontSchoolCard {...props} cardFlipCallback={this.showBackOfCard} />
        ) : (
          <BackSchoolCard
            cardFlipCallback={this.showFrontOfCard}
            locations={props.locations}
            logoSource={props.logoSource}
            schoolName={props.name}
          />
        )}
      </Card>
    );
  }
}

export default SchoolCard;
