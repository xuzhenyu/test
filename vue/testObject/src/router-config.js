import carSpeak from './components/sellcar.vue'
import HomeNav from './components/homenav.vue'

export default[
    {
        path:'/',
        component:HomeNav
    },
    {
        path: '/sellcar',
        name: 'carspeak',
        component: carSpeak
    }
]