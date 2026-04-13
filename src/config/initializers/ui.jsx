import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"

import { store } from "../../db/store"

import ScrollToTop from '../../application/plugins/ScrollToTop/ScrollToTop.jsx'
import RoutesConfiguration from '../Routes.jsx';

export const run = async () => {
  window.reactRootElement.render(
    <BrowserRouter>
      <Provider store={store}>
        <ScrollToTop />
        <main>
          <RoutesConfiguration />
        </main>
      </Provider>
    </BrowserRouter>
  )
}
