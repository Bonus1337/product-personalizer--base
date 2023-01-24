import styles from './ProductForm.module.scss';
import Button from '../Button/Button';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';
import PropTypes from 'prop-types';

const ProductForm = props => {

    const addToCart = e => {
      e.preventDefault();
      console.log("Summary")
      console.log("=================")
      console.log("Name:", props.name)
      console.log("Price:", props.price)
      console.log("Size:", props.currentSize.name)
      console.log("Color:", props.currentColor)
    }

  return (
    <form onSubmit={addToCart} >
      <OptionSize sizes={props.sizes} currentSize={props.currentSize} setCurrentSize={props.setCurrentSize}/>
      <OptionColor colors={props.colors} currentColor={props.currentColor} setCurrentColor={props.setCurrentColor} />
      <Button className={styles.button}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  )
}

ProductForm.propTypes = {
  sizes: PropTypes.array.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  colors: PropTypes.array.isRequired,
  setCurrentColor: PropTypes.func.isRequired
};

export default ProductForm;
