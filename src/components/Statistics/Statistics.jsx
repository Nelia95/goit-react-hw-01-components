import PropTypes from 'prop-types';
import './statistics.css';

function randomColor() {
  let colorCode =
    'rgb(' +
    Math.floor(Math.random() * 256) +
    ',' +
    Math.floor(Math.random() * 256) +
    ',' +
    Math.floor(Math.random() * 256) +
    ')';
  return colorCode;
}

const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      <div className="statistics-container">
        <h2 className="title">{title}</h2>
        <ul className="stat-list">
          {stats.map(statistic => (
            <li
              className="item"
              key={statistic.id}
              style={{ backgroundColor: randomColor() }}
            >
              <span className="label">{statistic.label}</span>
              <span className="percentage">{statistic.percentage}%</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
Statistics.defaultProps = {
  stats: [],
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
export default Statistics;
