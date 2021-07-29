import React from 'react';
import { connect } from 'react-redux';
import { fetchDog } from './redux/actions';

function App({ isFetching, src, fetchDog }) {
  console.log(isFetching, src);
  // fetchDog();
  return (
    isFetching ? <p>Loading</p>
      : (
        <div style={{ width: 500 }}>
          <button
            style={{ display: 'block' }}
            onClick={fetchDog}
            type="button"
          >
            Novo Doguinho
          </button>
          <img style={{ maxWidth: '100%' }} src={src} alt="dog" />
        </div>
      )
  );
}

const mapStateToProps = (state) => ({
  src: state.reducer.imagePath,
  isFetching: state.reducer.isFetching});

const mapDispatchToProps = (dispatch) => ({
  fetchDog: () => dispatch(fetchDog())});

export default connect(mapStateToProps, mapDispatchToProps)(App);
