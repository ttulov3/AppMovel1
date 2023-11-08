import { registerRootComponent } from 'expo';
import App from './src/app';
import {name as appName} from './app.json';


registerRootComponent(App, {initalProps: appName});
