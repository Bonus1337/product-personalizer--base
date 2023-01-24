import styles from './Product.module.scss';
import ProductForm from '../ProductForm/ProductForm';
import ProductImage from '../ProductImage/ProductImage';
import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';

const Product = props => {
  const [currentSize, setCurrentSize] = useState(props.sizes[0]);
  const [currentColor, setCurrentColor] = useState(props.colors[0]);

  const getPrice = (base, additional) => {
    return base + additional;
  }
  const finalPrice = useMemo(() => getPrice(props.basePrice, props.sizes[props.sizes.indexOf(currentSize)].additionalPrice), [props.basePrice, currentSize, props.sizes])

  return (
    <article className={styles.product}>
      <ProductImage title={props.title} name={props.name} color={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {finalPrice}$</span>
        </header>
        <ProductForm name={props.name} price={finalPrice} colors={props.colors} currentColor={currentColor} setCurrentColor={setCurrentColor} sizes={props.sizes} currentSize={currentSize} setCurrentSize={setCurrentSize}/>
      </div>
    </article>
  )
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired
};

export default Product;
