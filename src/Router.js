import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route exact path='/' component={ HomePage } />
        </BrowserRouter>
    )
}
export default Routes;