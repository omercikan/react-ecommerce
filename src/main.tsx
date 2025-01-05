import { createRoot } from 'react-dom/client'
import './css/index.css';
import './scss/main.scss'
import { RouterProvider } from 'react-router-dom';
import { MainRouter } from './router/MainRouter.tsx';
import { Provider } from 'react-redux';
import { MainStore } from './redux/store.ts';

createRoot(document.getElementById('root')!).render(
  <Provider store={MainStore}>
    <RouterProvider router={MainRouter} />
  </Provider>
)
