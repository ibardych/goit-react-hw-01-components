import PropTypes from 'prop-types';
import style from './Statistics.module.scss';

const Statistics = props => {
  const { title, stats } = props;
  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}>{title}</h2>}
      <ul className={style.statlist}>
        {stats.map(statistic => (
          <li
            key={statistic.id}
            className={style.item}
            style={{ backgroundColor: generateColdColor() }}
          >
            <span className={style.label}>{statistic.label}</span>
            <span className={style.percentage}>{statistic.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.string.isRequired,
    })
  ).isRequired,
};

function generateColdColor() {
  const hue = Math.floor(Math.random() * 360); // Choose hue from the entire color range
  const saturation = Math.floor(Math.random() * 41) + 60; // Choose saturation between 60% and 100%
  const lightness = Math.floor(Math.random() * 21) + 30; // Choose lightness between 30% and 50%
  const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`; // Combine values into an HSL color string
  return color;
}

export default Statistics;
