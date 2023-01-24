import styles from './OptionColor.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const OptionColor = props => {
  const formatColor = color => {
    return styles['color'+color.charAt(0).toUpperCase()+color.slice(1)];
  }

  return (
    <div className={styles.colors}>
      <h3 className={styles.optionLabel}>Colors</h3>
      <ul className={styles.choices}>
        {props.colors.map((color, idx) => <li key={idx}><button type="button" className={clsx(formatColor(color), color === props.currentColor && styles.active)} onClick={() => props.setCurrentColor(color)}></button></li>)}
      </ul>
    </div>
  );
};

OptionColor.propTypes = {
  colors: PropTypes.array.isRequired,
  currentColor: PropTypes.string.isRequired,
  setCurrentColor: PropTypes.func.isRequired
};

export default OptionColor;
