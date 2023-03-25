import logo from './logo.svg';
import classes from './App.module.css';
import ProductData from './ProductData'

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <nav className={classes.TopBar}>
          <img src={logo} className="App-logo" alt="logo" />
        </nav>

        <div className={classes.MainContainer}>

          <div className={classes.ProductPreview}>
            <img src={logo} className="App-logo" alt="Product Preview" />

            {/* <div className={classes.TimeSection}>
              <p>{`${new Date().getHours()}:${new Date().getMinutes()}`}</p>
            </div> */}
          </div>

          <div className={classes.ProductData}>

            <h1 className={classes.ProductTitle}>{ProductData.title}</h1>
            <p className={classes.ProductDescription}>{ProductData.description}</p>

            <h3 className={classes.SectionHeading}>Select Color</h3>
              <div>
                <img className={[classes.ProductImage, classes.SelectedProductImage].join(' ')} src="https://imgur.com/PTgQlim.png" alt="Teal color watch"/>
                <img className={classes.ProductImage} src="https://imgur.com/iOeUBV7.png" alt="Black color watch"/>
                <img className={classes.ProductImage} src="https://imgur.com/Mplj1YR.png" alt="Blue color watch"/>
                <img className={classes.ProductImage} src="https://imgur.com/xSIK4M8.png" alt="Purple color watch"/>              
              </div>

              <h3 className={classes.SectionHeading}>Features</h3>
              <div>
                <button className={[classes.FeatureItem, classes.SelectedFeatureItem].join(' ')}>Time</button>
                <button className={classes.FeatureItem}>Heart Rate</button>
              </div>

              <button className={classes.PrimaryButton}>Submit</button>

          </div>

        </div>

      </header>
    </div>
  );
}

export default App;
