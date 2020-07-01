import flats from '../components/Flat/Flat';

export function setFlats() {
  return {
    type: 'SET_FLATS',
    payload: flats
  }
}