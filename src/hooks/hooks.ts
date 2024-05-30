import { AppDispatch } from '../redax/store'; // Імпортуйте AppDispatch з вашого store
import { useDispatch } from 'react-redux';

// Типізований useDispatch хук
export const useAppDispatch: () => AppDispatch = useDispatch;
