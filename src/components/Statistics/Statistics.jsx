import PropTypes from 'prop-types';
import {StatisticsCard, StatisticsSection, Title, StatsList, StatsItem, Label, Percentage } from './Statistics.styled';
import color from './randomColor'

const Statistics = ({stats, title}) => {
    return (
        <StatisticsCard>
            <StatisticsSection>
              {title && <Title>{title}</Title>}
              <StatsList>
                {stats.map(({ id, label, percentage }) => (
                <StatsItem key={id} style={{backgroundColor: color()}}>
                  <Label>{label}</Label>
                  <Percentage>{percentage}%</Percentage>
                </StatsItem>
                  ))}
              </StatsList>
            </StatisticsSection>
        </StatisticsCard>
    );
  };

  export default Statistics;

  Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
      }),
    ),
  }